const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	devtool: "source-map",
	"mode": "production",
	"entry": path.resolve(__dirname, 'src') + "/index.js",
	"output": {
		"filename": "bundle.js",
		"path": path.resolve(__dirname, 'dist')
	},
	devServer: {
		inline: false,
		contentBase: "./dist",
	},
	"module": {
		"rules": [
			{
				"test": /\.html$/,
				"loader": "html-loader"
			},
			{
				test: /\.less$/, // .less and .css
				use: [
					 MiniCssExtractPlugin.loader,
					'css-loader',
					'less-loader'
				],
			},
		]
	},
	plugins: [new MiniCssExtractPlugin()]
};
