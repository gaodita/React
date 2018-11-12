import  React from 'react'

import cssobj from '@/css/cmitem.scss'
console.log(cssobj)

export default  function CmItem(props){

    //const itemSytle ={border:'1px dashed #ccc',margin:'10px',padding:'10px',boxShadow:'0 0 10px #ccc'}

    return <div className={cssobj.cmtbox}>
        <h1 className={cssobj.title}>评论人：{props.user}</h1>
        <p className={cssobj.centent}>评论内容：{props.content}</p>
    </div>

}