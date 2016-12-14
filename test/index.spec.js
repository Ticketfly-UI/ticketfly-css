const fs = require('fs');
const path = require('path');
const cssStats = require('cssstats');
const postcss = require('postcss');
const postcssImport = require('postcss-import');
const postcssCustomMedia = require('postcss-custom-media');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssCalc = require('postcss-calc');
const { expect } = require('chai');

const srcCSSPath = path.join(__dirname, '../src/index.css');

const srcCSS = fs.readFileSync(srcCSSPath, 'utf-8');

let compiledCSS;
let compiledCSSStats;

function generateStats(opts = {}) {
  compiledCSSStats = cssStats(compiledCSS, opts);
}

describe('Ticketfly CSS', () => {
  it('successfully compiles', () => {
    return postcss([
      postcssImport,
      postcssCustomMedia,
      postcssCustomProperties,
      postcssCalc
    ])
    .process(srcCSS)
    .then((result) => {
      compiledCSS = result.css;
    });
  });

  it('compiles to a string', () => {
    expect(typeof compiledCSS).to.equal('string');
  });

  it('compiles to a css', () => {
    expect(generateStats.bind(this, { safe: false })).to.not.throw(Error);
  });

  it('defines some rules', () => {
    expect(compiledCSSStats.rules.total > 0).to.equal(true);
  });

  it('makes some declarations', () => {
    expect(compiledCSSStats.declarations.total > 0).to.equal(true);
  });

  it('makes some declarations involving properties', () => {
    expect(Object.keys(compiledCSSStats.declarations.properties).length > 0).to.equal(true);
  });
});
