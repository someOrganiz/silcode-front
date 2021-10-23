const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

const isProd = process.env.NODE_ENV === "production";

const babelOptions = (preset) => {
  const opts = {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-proposal-class-properties"],
  };
  if (preset) {
    opts.presets.push(...preset);
  }
  return opts;
};

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@assets": resolve(__dirname, "/src/assets"),
      "@utils": resolve(__dirname, "src/utils"),
      "@publicStyles": resolve(__dirname, "public/styles"),
    },
  },
  optimization: {
    minimizer: [new TerserWebpackPlugin()],
  },
  devServer: {
    static: "./dist",
    port: 9000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions([
            "@babel/preset-typescript",
            "@babel/preset-react",
          ]),
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions(["@babel/preset-typescript"]),
        },
      },
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif|mp4)$/i,
        type: "asset/resource",
      },
    ],
  },
};
