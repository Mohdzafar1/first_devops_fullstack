import React, { useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const[tasks,setTasks]=React.useState([])

     const getTasks=async()=>{
      try{
         let res=await axios.get('http://localhost:8000/api/getTask')
         setTasks(res.data.tasks)
      }catch(e){
        console.log(e)
      }
     }

     useEffect(()=>{
        getTasks()
     },[])
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h2>{task.title}</h2>
            <p>{task.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home