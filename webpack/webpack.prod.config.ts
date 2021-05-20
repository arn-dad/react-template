import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import Dotenv from 'dotenv-webpack';
import { src, root } from './utilities/paths';

const mode = "production"

const config: webpack.Configuration = {
  mode,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias      : {
      '@stores': `${src}/stores`,
      "@services": `${src}/services`,
      "@hooks": `${src}/hooks`,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new CleanWebpackPlugin(),
    new Dotenv({
      path: `${root}/env/.env.${mode}`,
      safe: `${root}/env/.env.example`,
      silent: false
    })
  ],
};

export default config;