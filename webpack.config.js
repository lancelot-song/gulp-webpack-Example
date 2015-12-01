var path = require("path");
var webpack = require('webpack');
//定义文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,"lib");
var BUILD_PATH = path.resolve(ROOT_PATH,"build/js");
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    //项目的文件夹
    entry : {
        "main" : "./lib/js/main.js"
    },
    //输出的文件名，合并以后的js为bundle.js
    output:{
        path: BUILD_PATH,
        filename: './[name].min.js',
        chunkFilename:'./[name].min.js',
        publicPath:''
    },
    //提取公用
    //plugins:[commonsPlugin],
    //添加css处理
    module: {
        loaders: [
          {//处理扩展的插件
            test: require.resolve("./lib/js/zepto.min.js"),
            loader: "exports?Zepto"
          }
        ]
    }
};