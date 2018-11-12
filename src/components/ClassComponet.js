import React, {Component} from 'react';
import CmItem from './CmItem'
//1、用构造函数创建出来的组件，叫做“无状态组件”
//2、用Class关键字创建出来的组件，叫做“有状态组件”
//3、什么状态下使用无状态组件 什么情况下用有状态组件
//4、有没有state和生命周期函数
//5、如果一个组件需要有自己的私有数据的数据时候使用 有状态组件  如果没有
//6、function和Class的区别
//7、组件中的 props和state/date的区别
//8、props中的数据都是外界传递过来的state/data中的数据，都是私有数据通过Ajax传递过来的

import cssobj from '@/css/cmItemList.scss'
console.log(cssobj)
//如果在引用某个包的时候，这个包被安装到了 node_module 目录中 可以省略 node_module 这层目录 自接以包名引入样式
import  'bootstrap/dist/css/bootstrap.css'

//自己规定 第三方的样式表 都是以.css结尾
//        自己定义的样式表，都是以.scss或者.less结尾 这样我们就不对普通的css文件进行模块化处理
//


export default class Movie extends  Component{

    constructor(){
        super();

        this.state ={

  ComponentList:[
      {id:1,user:"张三",content:"哈哈哈，好的1"},
      {id:2,user:"历史",content:"哈哈哈，好的2"},
      {id:3,user:"王五",content:"哈哈哈，好的3"},
      {id:4,user:"小青",content:"哈哈哈，好的4"},
      {id:5,user:"变成",content:"哈哈哈，好的5"},
  ]


        }
    }

    render(){

        return <div>
            <h1 className={[cssobj.title,'test'].join(' ')}>这是评论列表组件</h1>
            <button className='btn btn-primary'>按钮</button>
            <div className="panel panel-primary"></div>
            {/*<button className={[bootcss.btn,bootcss['btn-primary']].join(' ')}>按钮</button>*/}
            <br/>
            {this.state.ComponentList.map(item =><CmItem {...item} key={item.id}></CmItem>)
                }
        </div>
    }

}