
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs');
const helpers = require('./webpack.helpers.js');
const WBMetaJsonGenerator = require("meta-json-generator");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const fileSystem = helpers.generateFS(__dirname + '/src/actions', "workerB")

const entryFiles = helpers.generateEntryPaths(fileSystem.children)

const entryPaths = helpers.getFiles(entryFiles, ".ts").map(file => file.replace('.ts', ''))

// const metaFiles = helpers.getFiles(entryFiles, ".json")

// let copyPatterns = metaFiles.map(
//     (metaFile) => ({ from: './src/actions/' + metaFile, to: './' + metaFile })
// )

// const rootJSON = fs.readFileSync("./src/actions/meta.json", 'utf8')
// const rootJSONParsed = rootJSON ? JSON.parse(rootJSON) : {}

// let iconPath = ""

// if (rootJSONParsed.icon) {
//     iconPath = path.join("./src/actions", rootJSONParsed.icon)
//     copyPatterns.concat({ from: iconPath, to: './' })
// }

module.exports = {
    entry: entryPaths.reduce((result, entryPath) => {
        result[entryPath] = "./src/actions/" + entryPath + ".ts"
        return result;
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
                query: { "presets": ["@babel/preset-env"] }
            }
        ]
    },
    plugins: [
        new WBMetaJsonGenerator({
            package: "github package update",
            packageDescription: "automate all the github tasks",
            folderDescriptionList: [
                {path: "/orgs/option/repos/option/branches", description: "List all the branches of a repo"},
                {path: "/orgs/option/repos/option/issues", description: "List all the issues of the repo"},
                {path: "/orgs/option/repos/option/pulls", description: "List all the pull requests of the repo"},
                {path: "/orgs/option/repos", description: "List all the repos"},
                {path: "/orgs", description: "List all the organizations"}
            ]
        })
    ],
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              output: {
                comments: /(@description|@name|@ignore)/i,
              },
            }
          }),
        ],
      }
}