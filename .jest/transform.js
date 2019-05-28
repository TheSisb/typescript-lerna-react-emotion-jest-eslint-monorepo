const babelOptions = {
  presets: ['@babel/preset-react', '@babel/preset-env'],
  plugins: ['macros'],
};
module.exports = require('babel-jest').createTransformer(babelOptions);
