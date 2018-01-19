const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		vendor: ['react', 'react-dom'],
		myGarden: ['./index.js']
	},
	devtool: 'source-map',
	watch: true,
	watchOptions: {
		ignored: /node_modules/
	},
	output: {
		path: path.resolve(__dirname, 'public/js'),
		publicPath: '/js/',
		filename: '[name].js',
		library: '[name]',
		libraryTarget: 'window',
		libraryExport: "default",
		chunkFilename: '[name].chunk.js',
	},
	externals: {
		jquery: 'jQuery'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react', 'flow'],
						plugins: [
							"transform-object-assign",
							"transform-class-properties",
							"transform-es2015-parameters",
							"transform-object-rest-spread",
							"syntax-flow",
							'babel-plugin-syntax-dynamic-import'
						]
					}
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		})
	]
};
