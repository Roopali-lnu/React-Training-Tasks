import React, { useState } from 'react'
import "./App.css"
import Task from './Components/Task';
import TaskList from './Components/TaskList';
function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <Task addList={addList}/>
        <h1 className="app-heading">TO-DO List</h1>
        {listTodo.map((listItem,i)=>{
          return (
            <TaskList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default App