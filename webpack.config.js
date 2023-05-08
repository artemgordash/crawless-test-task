// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js',
    },
    target: 'web',
    devServer: {
        port: '9500',
        static: ['./public'],
        open: true,
        hot: true,
        liveReload: true,
    },
    resolve: {
        extensions: ['.*', '.ts', '.tsx', '.js', '.jsx', '.svg'],
        alias: {
            root: __dirname,
            '@': path.resolve(__dirname, 'src/'),
            'public': path.resolve(__dirname, 'public/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(less)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'less-loader', options: {
                            lessOptions: {
                                paths: [path.resolve(__dirname, 'src/styles')],
                            },
                        },
                    },

                ],
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(css)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
        ],
    },
};