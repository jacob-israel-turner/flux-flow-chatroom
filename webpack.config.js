module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  },
  resolve: {
  	modulesDirectories: ['node_modules', 'app']
  }
};