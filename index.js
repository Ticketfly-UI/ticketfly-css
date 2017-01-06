/* global module */
'use strict';

module.exports = {
  name: 'ticketfly-css',

  inputCSSFileName: 'index.css',

  getCSSOutputFileName() {
    return `${this.name}.css`;
  },

  getPostCSSPlugins() {
    const cssImport = require('postcss-import');
    const cssNext = require('postcss-cssnext');

    return [
      { module: cssImport },
      {
        module: cssNext,
        options: {
          features: {
            customProperties: { preserve: true }  // 📋 TODO: Make this (along with a lot of other things) dynamic and configurable
          }
        }
      }
    ];
  },

  isAddon() {
    const keywords = this.project.pkg.keywords;

    return Array.isArray(keywords) && keywords.indexOf('ember-addon') !== -1;
  },

  isDummyApp() {
    return this._target.name === 'dummy';
  },

  isOurProject() {
    return this._target.project.name() === this.name;
  },

  shouldImportStyles() {
    return !this.isAddon() || this.isDummyApp();
  },

  importStyles() {
    this._target.import(`vendor/${this.getCSSOutputFileName()}`);
  },

  included: function(app, parentAddon) {
    this._super.included(...arguments);

    // Ensures that imports work for nested addons and engines
    // @see: https://github.com/ember-cli/ember-cli/issues/3718
    const parentApp = (typeof app.import !== 'function' && app.app) ? app.app : app;
    const target = parentAddon || parentApp;

    this._target = target;
    this._targetConfig = this.project.config(this.app.env)['ticketfly-css'] || {};

    if (this.shouldImportStyles()) {
      this.importStyles();
    }
  },

  treeForVendor(node) {
    if (!this.shouldImportStyles()) {
      return node;
    }

    const path = require('path');
    const Funnel = require('broccoli-funnel');
    const mergeTrees = require('broccoli-merge-trees');
    const compileCSS = require('broccoli-postcss-single');

    const stylesPathRoot = this.isDevelopingAddon() ? '' : path.join(this.project.nodeModulesPath, this.name);
    const stylesPath = path.join(stylesPathRoot, 'src');

    const inputTree = new Funnel(stylesPath, {
      include: [/\.css$/]
    });

    const inputFileName = this.inputCSSFileName;
    const outputFileName = this.getCSSOutputFileName();
    const postCSSPlugins = this.getPostCSSPlugins();
    const sourceMapOpts = { inline: true };

    const compiledCSS = compileCSS([inputTree], inputFileName, outputFileName, postCSSPlugins, sourceMapOpts);

    const outputNode = node ? mergeTrees([node, compiledCSS]) : compiledCSS;

    return outputNode;
  }
};
