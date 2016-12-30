const fs = require('fs');
const path = require('path');
const cssStats = require('cssstats');
const postcss = require('postcss');
const cssImport = require('postcss-import');
const cssNext = require('postcss-cssnext');
const { expect } = require('chai');

const srcCSSPath = path.join(__dirname, '../src/index.css');

const srcCSS = fs.readFileSync(srcCSSPath, 'utf-8');

let compileReport;
let compiledCSS;
let compiledCSSStats;

function generateStats(opts = {}) {
  compiledCSSStats = cssStats(compiledCSS, opts);
}

describe('Ticketfly CSS', () => {
  it('successfully compiles', () => {
    return postcss([
      cssImport,
      cssNext
    ])
    .process(srcCSS)
    .then(result => {
      compileReport = result;
      compiledCSS = result.css;
    });
  });

  it('produces messages about the output', () => {
    expect(Array.isArray(compileReport.messages)).to.equal(true);
  });

  it('compiles without errors or warnings', () => {
    const warningCount = compileReport.messages.filter(message => message.type === 'warning').length;

    expect(warningCount).to.equal(0);
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
