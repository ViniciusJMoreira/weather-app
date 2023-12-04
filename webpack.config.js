module.exports = {
  entry: {
    index: './src/js/'
  },
  mode: 'production',
  output : {
    filename : '[name].min.js'
  },
  module: {
    rules: [{
      test: /\.css$/ ,
      use: ['style-loader', 'css-loader']
    }]
  }
}