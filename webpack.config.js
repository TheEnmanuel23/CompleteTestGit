const path = require('path')
const webpack = require('webpack')

const config = {
	entry: './src/index',
	output: {
		path: path.resolve(__dirname, './dist/assets'),
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
	plugins: [
    new webpack.DefinePlugin({
      'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				API_URL: JSON.stringify(process.env.API_URL)
      },
    }),
  ],
	devServer: {
		contentBase: path.join(__dirname, './'),
		compress: true,
		inline: true,
		port: 7070,
		stats: 'errors-only'
	}
}

module.exports = config