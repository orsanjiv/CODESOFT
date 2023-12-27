import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import { useState} from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState (false)   

  const [tasks, setTasks] = useState([
   
    {
        id: 1,
        text: 'Personal Portfolio',
        day: 'dec 22nd at 2:30pm',
        remidner: false,
    },
    {
        id: 2,
        text: 'Task Tracker',
        day: 'Dec 23rd at 2:20pm',
        remidner: true,
    },
    {
        id: 3,
        text: 'Blog Platform',
        day: 'Dec 24st at 9:30pm',
        remidner: false,
    },
    {
        id: 4,
        text: 'Product Catelog',
        day: 'Dec 27st at 9am',
        remidner: false,
    },
    {
      id: 5,
      text: 'Online Quiz Platform',
      day: 'Dec 28st at 9am',
      remidner: false,
  }
])
//add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000 )+ 1;
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id!== id))
}

//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? 
  { ...task, reminder: !task.reminder} : task))
}

  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 mx-auto"><b>Task Tracker</b></span>
        </div>
      </nav>
    <div className="container">
     <Header showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask)} />

     {showAddTask && <AddTask onAdd={addTask} />}
     {tasks.length >0 ?<Tasks tasks={tasks} onToggle={toggleReminder} 
     onDelete={deleteTask} /> 
     :
      'Add Some Tasks....'}
  
    </div>
    </>

  );
}


export default App; 
