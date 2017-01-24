/* global module */

const postCSSCompilingPackages = [
  { name: 'broccoli-funnel', target: '^1.1.0' },
  { name: 'broccoli-merge-trees',target: '^1.2.1' },
  { name: 'broccoli-postcss-single', target: '^1.2.0' },
  { name: 'postcss-cssnext', target: '^2.9.0' },
  { name: 'postcss-import', target: '^9.0.0' }
];

module.exports = {
  description: 'install ticketfly-css into an Ember CLI project',

  normalizeEntityName: function() {},

  beforeInstall: function(options) {
    return this.addPackagesToProject(postCSSCompilingPackages);
  }

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
