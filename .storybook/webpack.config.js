module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-react-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                    }
                ],
            }
        ]
    }
}
