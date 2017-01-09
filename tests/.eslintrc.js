module.exports = {
  env: {
    'embertest': true
  },
  rules: {
    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: false,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: false,
      allowObjectStart: true,
      allowObjectEnd: false,
      allowArrayStart: true,
      allowArrayEnd: false
    }]
  }
};
