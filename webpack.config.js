
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs');
const helpers = require('./webpack.helpers.js');
const WBMetaJsonGenerator = require("wb-packager-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const fileSystem = helpers.generateFS(__dirname + '/src/actions', "workerB")

const entryFiles = helpers.generateEntryPaths(fileSystem.children);

const mode = process.argv.filter(val => val.includes("--mode"));
let environment = "production";
if(mode.length > 0 && mode[0].includes("dev")) {
  environment = "development";
}

const entryPaths = helpers.getFiles(entryFiles, ".ts").map(file => file.replace('.ts', ''));

const folderDescriptionList = [
    {path: "/orgs/option/repos/option/branches", description: "List all the branches of a repo"},
    {path: "/orgs/option/repos/option/issues", description: "List all the issues of the repo"},
    {path: "/orgs/option/repos/option/pulls", description: "List all the pull requests of the repo"},
    {path: "/orgs/option/repos", description: "List all the repos"},
    {path: "/orgs", description: "List all the organizations"}
]

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
            environment,
            package: "Github",
            packageDescription: "workerB package for github.com",
            packageIcon: "src/action/package_logo.png",
            readmeFile: "README.md",
            sites: [
                "https://www.github.com"
            ],
            folderDescriptionList
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
