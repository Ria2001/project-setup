const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    public: ["./src/js/index.js", "./src/sass/index.scss"],
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [
          {
            loader: "file-loader",

            options: {
              name: "[name].css",
              outputPath: "./",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Desgin System",
      template: "src/design-system.html",
      filename: "design-system.html",
    }),
    new HtmlWebpackPlugin({
      title: "My Index",
      template: "src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      title: "About Contact",
      template: "src/aboutcontact.html",
      filename: "aboutcontact.html",
    }),
    new HtmlWebpackPlugin({
      title: "Illu",
      template: "src/illu.html",
      filename: "illu.html",
    }),
    new HtmlWebpackPlugin({
      title: "Illu 2",
      template: "src/illu2.html",
      filename: "illu2.html",
    }),
    new HtmlWebpackPlugin({
      title: "Illu 3",
      template: "src/illu3.html",
      filename: "illu3.html",
    }),
    new HtmlWebpackPlugin({
      title: "Illu 4",
      template: "src/illu4.html",
      filename: "illu4.html",
    }),
    new HtmlWebpackPlugin({
      title: "Illu 5",
      template: "src/illu5.html",
      filename: "illu5.html",
    }),
    new HtmlWebpackPlugin({
      title: "Illu 6",
      template: "src/illu6.html",
      filename: "illu6.html",
    }),
    new CopyWebpackPlugin({
      patterns:[{
        from: 'src/images', to: 'images'
      }]
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
