import { Configuration } from "webpack";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserWebackPlugin from "terser-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ForkTsCheckerNotifierWebpackPlugin from "fork-ts-checker-notifier-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";

const config: Configuration = {
  mode: "development",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    plugins: [new TsconfigPathsPlugin({})]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        loaders: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: "@svgr/webpack"
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      },
      {
        enforce: "pre",
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitError: true
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new ForkTsCheckerNotifierWebpackPlugin()
  ],
  optimization: {
    minimizer: [new TerserWebackPlugin(), new OptimizeCSSAssetsPlugin()]
  }
};

export default config;
