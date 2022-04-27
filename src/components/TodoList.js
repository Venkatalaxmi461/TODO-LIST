import React, { useEffect, useState } from 'react'
import CreateTask from '../modals/CreateTask'
import Card from './Card';

 function TodoList() {
   const [modal,setModal] = useState(false);
   const [taskList, setTaskList] = useState([]);

    useEffect(() => {
         let arr=localStorage.getItem("taskList")
         if(arr){
           let obj =JSON.parse(arr)
           setTaskList(obj)
         }
    }, [])//to fetch items from local storage

    const deleteTask = (index) => { //this fucntion will take the index from card component and delete the element
      let tempList = taskList
      tempList.splice(index, 1)
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(tempList)
      window.location.reload()
  }

  const updateListArray = (obj, index) => {
      let tempList = taskList
      tempList[index] = obj
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(tempList)
      window.location.reload()
  }
   const toggle = ()=>{
     setModal(!modal); 
   }
   const saveTask =(taskObj) =>{
     let tempList =taskList
     tempList.push(taskObj)
     localStorage.setItem("taskList",JSON.stringify(tempList))//stringify function is used to convert list to string
     setTaskList(tempList)//creating list of itrems
     setModal(false)//after listing ,to close the popup,we use this
   }
  return (
    <div>
        <div className='header text-center'>
        <h3>TODO LIST</h3>
        <button className='btn btn-secondary mt-2' onClick={()=>setModal(true)}>create Task</button>{/*if the modal is set to true,pop up will appear*/}
        </div>
        <div className='task-container'>
          { taskList && taskList.map((obj, index) => <Card taskObj ={obj} index = {index} deleteTask={deleteTask} updateListArray = {updateListArray}/>)}
        </div>
        
        <CreateTask toggle = {toggle} modal = {modal} save={saveTask}/>
    </div>
  )
}
export default TodoList