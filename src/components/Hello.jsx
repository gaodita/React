import React from 'react'//创建组件 虚拟DOM元素 生命周期


function Hello(props){
//props 永远都是只读的数据
    return <div>
        <h1>这个第一个可以测试的React组件---<br/>
            {props.name}<br/>
            {props.age}<br/>
            {props.gender}</h1>
    </div>;
}
export  default Hello