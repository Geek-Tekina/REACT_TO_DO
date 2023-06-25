import React from 'react'

function TodoList(props) {
  return (
    <li className="list-item">
        {props.item}
        <i className='icon-delete' onClick={()=>{
            props.deleteitem(props.index)
        }}><span className='icons'>Del</span></i>
    </li>
  )
}

export default TodoList