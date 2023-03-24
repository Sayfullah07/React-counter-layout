import {useState} from 'react'
import './App.css';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

function App() {

const [todos, setTodos] = useState([]);

const addTask = (userInput) =>{
  if(userInput){
    const newItem = {
      id: Math.random().toString(36).substr(2,9),
      task: userInput,
      complete: false
    }
    setTodos([...todos,newItem])
  }


}

const removeTask = (id) =>{
  setTodos([...todos.filter((todo) => todo.id !== id)])

}

const handlerToggle = (id) =>{
  setTodos({...todos.map((todo) =>todo.id === id ? {...todo,  complete: !todo.complete} : {...todo})
  })

}

  return (
    <div className='App'>
      <div className='container'>  
        <header>
          <h1>Список задач: {todos.length}</h1>
        </header>
  
        {todos.map((todo) => {
          return(
  
            <ToDo
            todo={todo}
            key={todo.id}
            removeTask={removeTask}
            handlerToggle={handlerToggle}
            />
          )
        })}
        <ToDoForm addTask={addTask}/> 
      </div>
      
    </div>
  )
}

export default App;
