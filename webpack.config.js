const WebpackShellPlugin         = require('webpack-shell-plugin');
const nodeExternals              = require('webpack-node-externals');

module.exports = {
    entry: {
        server: './src/index.ts'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    // Enable sourcemaps for debugging webpack's output.
    // devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.js' ]
    },
    module: {
        rules: [
            // {
            //     test: /\.tsx?$/,
            //     exclude: /node_modules/,
            //     use : "awesome-typescript-loader",
            // },
            // {
            //     test: /\.js$/,
            //     loader: 'source-map-loader',
            //     enforce: 'pre'
            // },
            {
                test: /\.(ts|js)x?$/,
                exclude: "/node_modules/",
                use: "babel-loader"
            }
        ]
    },
    plugins: [
        new WebpackShellPlugin({onBuildEnd: ['nodemon dist/server.js --watch dist']})
    ],
    externals: [
        nodeExternals()
    ],
    mode: "production"
};
