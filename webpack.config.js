const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./SRC/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },

  mode: "development",
  plugins: [
    new HTMLWebpackPlugin({
      template: "./SRC/index.html",
    }),
  ],
};
