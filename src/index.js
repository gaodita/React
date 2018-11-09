import React from 'react'//创建组件 虚拟DOM元素 生命周期
import ReactDOM  from 'react-dom'//把创建好的主键和虚拟DOM放到页面上进行展示

//导入组件
import Hello from './components/Hello.jsx'
import   './components/BaseUseClass.js'



//1、这两个导入时候，接收的接收成员名称 必须这么写
//
//
// //2、创建虚拟DOM元素
// // 参数1：创建的元素类型，字符串，标识元素的名称
// // 参数2：是一个对象或null
// // 参数3：子节点（包括 其他 虚拟DOM 获取 文本子节点）
// // 参数n：其他子节点
// const myh1 = React.createElement('h1',{id:'myh1',title:"h11"},'这是个大大的H1');
//
//
// const mydiv = React.createElement('Div',null,'这是个DIV',myh1);
//
// const mynewdiv=<div>这是我的第一个React应用环境！！！好开心。。。</div>
//
// //数据类型指定处理
// let a =10 //{ }进行占位符号
// let str ='你好，中国'//{ }进行占位符号
// let boo=true//{ }进行占位符号
// //属性配置处理
// let title ='999'
// const h1s=<h1>红红火火！！！</h1>
// const shuzhu=[
//     <h1>红红火火！！！</h1>,
//     <h2>红红火火！！！</h2>
// ]
// //方案一 循环数组
// const arrst=['毛利兰','柯南','小五郎','柯南']
// //注意 ： react中，需要把Key 添加给，被Forreach map
// const arrstname=[]
//     arrst.forEach(item =>{
//     const temp = <h5 key={item}>{item}</h5>
//     arrstname.push(temp)
// })
// //什么情况时候使用花括号 当我们需要在JSX的区域内 写JS表达式的时候需要用花括号
// const arrstnamemap= arrst.map(item =>
//     {return item+'~~~'}
// )

// 在组件中 名称必须首字母大写 同时必须返回值
// function Hello(props) {
//
//     return <div>这是组件</div>
//     // {/*<h1>组件形式</h1>*/}
//     // return null;//如果组件返回 null 页面上什么也不渲染
// }

// const  dog=
//     {
//     name:'大黄',
//     age:3,
//     gender:'雄性'
//     }

//3、使用ReactDOM 把虚拟DOM渲染到页面上
// 参数1：要渲染的那个虚拟DOM元素
// 参数2：指定页面上的一个容器
// 参数3：
// 参数n：

const dog ={
    name:"大黄",
    age:"3",
    gender:"雄性"
}




// {/*<Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>*/}
ReactDOM.render(<div>
    Hello World!!!
    <br/>
    <Hello {...dog}></Hello>

</div>,document.getElementById("app"));