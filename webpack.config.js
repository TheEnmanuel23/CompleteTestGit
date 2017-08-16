const path = require('path')

const config = {
	entry: './src/index',
	output: {
		path: path.resolve(__dirname, './dist/js'),
		filename: 'bundle.js',
		publicPath: "/assets/"
	},
	module: {
		rules: [
			{
			 test: /\.scss$/, use:  ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				include: [path.resolve(__dirname, './src/')],
				loader:'babel-loader',
				options: {
					presets: ['es2015', 'react', 'stage-2']
				}
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, './'),
		compress: true,
		inline: true,
		port: 7070,
		stats: 'errors-only'
	}
}

module.exports = config