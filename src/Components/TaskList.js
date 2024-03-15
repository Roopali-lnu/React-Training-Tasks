import React from 'react'
import Checkbox from '@mui/material/Checkbox';



function TaskList(props) {
  return (
    <li className="list-item">
    <Checkbox />
        {props.item}
        
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>        
        </span>
    </li>
  )
}

export default TaskList