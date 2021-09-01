const path = require('path');
module.exports = {
	"mode": "production",
	"entry": path.resolve(__dirname, 'src') + "/index.js",
	"output": {
		"filename": "index.js",
		"path": path.resolve(__dirname, 'dist') + "/index.js"
	},
	"module": {
		"rules": [
			{
				"test": /\.html$/,
				"loader": "html-loader"
			}
		]
	}
};
