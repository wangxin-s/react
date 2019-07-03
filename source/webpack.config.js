const webpack=require('webpack');
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

//获取模式变量 dev 开发模式  dist 本地生产模式  release 服务器生产模式
var WEBPACK_PRO_ENV = process.env.NODE_ENV;
console.log(process.env.NODE_ENV)
var modelString = {
    'dev':'你现在打包模式是dev开发模式',
    'dist':'你现在打包模式是dist本地生产模式',
    'release':'你现在打包模式是release服务器生成模式'
}
console.log(modelString[WEBPACK_PRO_ENV]);

var sourcePath = {
    'dev':path.join(__dirname,'../server/views'),
    'dist':path.join(__dirname,'../dist'),
    'release':'/opt/allwebfront/topwebfront'
}

module.exports={
    entry:path.join(__dirname,'./src/js/router.js'),
    output:{
        filename:'js/[name]_[chunkhash:8].js',
        path:sourcePath[WEBPACK_PRO_ENV],
        publicPath:'/'
    },
    devtool:WEBPACK_PRO_ENV!=='dev'?'eval-source-map':'eval-source-map',
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                options:{
                    presets:['env','react']
                }
            },
            {
                test:/\.(css|sass|scss)$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test:/\.(png|jpg|jpeg|gif|svg)$/,
                loader:'url-loader',
                options:{
                    limit:8192,
                    name:'images/[name]_[hash:8].[ext]',
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'this is a react-webpack',
            filename:'index.html',
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'css/[name]_[hash:8].css',
        }),
        new webpack.ProvidePlugin({
            $: "jquery",//解决JQUERY全局问题
            jQuery: "jquery",
            'window.jQuery':'jquery',
            'window.$':'jquery',
            accounting:'accounting',
            moment:'moment',
            echarts:'echarts',
        })
    ]
};