const path =require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')//导入 在内存中自动生成 index页面的插件

//创建一个插件实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    // 配置成功之后会自动在内存中生成一个index.html文件，同时也是可以直接在页面的尾部追加一个main.js文件的
    template:path.join(__dirname,'./src/index.html'),//源文件
    filename:'index.html'//生成在内存中的文件

})

//向外暴露一个打包的配置对象；因为webpack是基于Node构建的；所以 Webpack支持所有Node API 和 语法
module.exports ={
    devtool: 'source-map',
    // prduction 模式下会自动压缩，development模式下是不会自动进行压缩的。【这是一个必须选项】
    mode:'development',//development production
    // webpack4.x 约定了默认的打包入口文件是src下面的index.js文件
    // entry : './src/main.js'         // 指定打包的入口文件，也可以不指定设置一个index.js文件
    //在 webpack 4.X 中，有一个很大的特性，就是约定大于配置 约定， 默认的打包入库路径是 src -> index.js
    plugins:[
        htmlPlugin
    ],
    module: {
        // 所有第三方模块的配置规则（Webpack默认只能打包js文件，对于其他vue，png，react是无法直接使用的）
        // 只要代码中有webpack不能识别的规则，就需要配置loader
        rules: [
            {
                test:/\.(js|jsx)$/,
                use:{ loader:'babel-loader'
                },
                exclude:/node_modules/
            }
        ]
    },
    resolve: {//英文含义 决定
        extensions: ['.js','.jsx','json'],//这几后缀名省略配置，

        alias: {
            '@':path.join(__dirname,'./src')//这样，@就表示 项目根目录中的 Src的这一层路径
        }
    }
//在Webpack 4.X
}