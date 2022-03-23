const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: "babel-loader",
                        options: { // otras opciones para loader.
                            minified: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // archivo origen.
            filename: "./index.html", // archivo destino.
        })
    ]
}