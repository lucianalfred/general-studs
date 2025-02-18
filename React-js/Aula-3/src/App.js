import {useState} from "react";
import './App.css';


function App(){
  const [tasks, setTasks] = useState([
    {id:1, name:"Record Lecture", completed:false}, 
    {id:2, name:"Development", completed:false}]);

  return(
    <div className="App">
      <h1>Task list</h1>
      <ul>
        {
          tasks.map((task) =>(
            <li>
              <span>{task.id} - {task.name }</span>
              <button>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default App;
