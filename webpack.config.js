'use-strict';

const path = require("path");
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");


const base = {
	target: "web",
	context: path.resolve('src'),
	// entry: // // path.resolve("src/index.js"),
	entry: [
		'bootstrap/scss/bootstrap.scss',
		'./index.js',
	],
	output: {
		path: path.resolve("dist"),
		publicPath: "/",
		filename: "main.js",
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Production",
			template: path.resolve("src/index.html"),
			favicon: path.resolve("src/favicon.ico"),
		}),
	],
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						sourceMap: true,
						rootMode: "upward"
					},
				},
			},
			{
				test: /\.s?(a|c)ss$/,
				use: [
					'style-loader',
					"css-loader",
					'postcss-loader',
					"sass-loader",
				],
			},
		],
	},
};


const environments = {
	development: {
		mode: 'development',
		devtool: 'eval-source-map',
		devServer: {
			contentBase: path.resolve('dist'),
			overlay: true,
			open: true,
			historyApiFallback: true,
			disableHostCheck: true,
			headers: { "Access-Control-Allow-Origin": "*" },
			https: false,
		},
	},

	production: {
		mode: 'production',
		// devtool: 'source-map',
		performance: {
			hints: false,
		},
		optimization: {
			minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})],
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: "[name].css",
				chunkFilename: "[id].css",
			}),
			require('cssnano')({
				preset: 'default',
			}),
		],
	},
};


module.exports = function webpackConfig(env) {
	return merge(base, environments[env]);
};

