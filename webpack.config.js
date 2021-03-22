const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const fs = require('fs')
const helpers = require('./webpack.helpers.js')
const WBMetaJsonGenerator = require('wb-packager-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const fileSystem = helpers.generateFS(__dirname + '/src/actions', 'workerB')

const entryFiles = helpers.generateEntryPaths(fileSystem.children)

const mode = process.argv.filter((val) => val.includes('--mode'))
let environment = 'production'
if (mode.length > 0 && mode[0].includes('dev')) {
	environment = 'development'
}

const entryPaths = helpers.getFiles(entryFiles, '.ts').map((file) => file.replace('.ts', ''))

const folderDescriptionList = [
	{
		path: '/orgs/option/repos/option/workflows',
		iconPath: 'src/actions/orgs/option/repos/option/workflows/workflows_logo.png',
		description: 'List all the actions of a repo',
		defaultAction: 'open',
	},
	{
		path: '/orgs/option/repos/option/branches',
		iconPath: 'src/actions/orgs/option/repos/option/branches/branch_logo.png',
		description: 'List all the branches of a repo',
		defaultAction: 'open',
	},
	{
		path: '/orgs/option/repos/option/issues',
		iconPath: 'src/actions/orgs/option/repos/option/issues/issue_logo.png',
		description: 'List all the issues of the repo',
		defaultAction: 'open',
	},
	{
		path: '/orgs/option/repos/option/pulls',
		iconPath: 'src/actions/orgs/option/repos/option/pulls/pull_logo.png',
		description: 'List all the pull requests of the repo',
		defaultAction: 'open',
	},
	{
		path: '/orgs/option/repos',
		iconPath: 'src/actions/orgs/option/repos/repo_logo.png',
		description: 'List all the repos',
		defaultAction: 'open',
	},
	{
		path: '/orgs',
		iconPath: 'src/actions/orgs/org_logo.png',
		description: 'List all the organizations',
		defaultAction: 'open',
	},
]

module.exports = {
	entry: entryPaths.reduce((result, entryPath) => {
		result[entryPath] = './src/actions/' + entryPath + '.ts'
		return result
	}, {}),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		globalObject: 'this',
		libraryTarget: 'umd',
		library: 'main',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: { presets: ['@babel/preset-env'] },
			},
		],
	},
	plugins: [
		new WBMetaJsonGenerator({
			environment,
			package: 'Github',
			packageDescription: 'workerB package for github.com',
			packageIcon: 'src/actions/package_logo.png',
			readmeFile: 'README.md',
			sites: ['https://www.github.com'],
			folderDescriptionList,
		}),
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					output: {
						comments: /(@description|@name|@ignore)/i,
					},
				},
			}),
		],
	},
}
