import path from 'path';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    //   new webpack.HotModuleReplacementPlugin(),
    //   new webpack.NoErrorsPlugin(),
    //   new ExtractTextPlugin('./src/index.css')
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
    //   {test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!less-loader?sourceMap')},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
