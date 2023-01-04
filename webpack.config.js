const path=require('path')
const HtmlWebPackPlugin=require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports={
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test: /\.(s*)css/,
                use:['css-loader',MiniCssExtractPlugin.loader,'sass-loader'],
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            },{
                test: /\.html/,
                use:{
                   loader:'html-loader',
                }

            }
        ],
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./public/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'assets/[name].css'
        })
    ],
    resolve:{
        extensions:['.js']
    },
    devServer:{
        static:path.join(__dirname,'dist'),
        compress:true,
        port:3000,
        historyApiFallback:true,
        open:true
    }
}