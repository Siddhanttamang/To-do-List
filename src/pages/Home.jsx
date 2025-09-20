import {useState} from 'react'
import '../css/home.css'
import { useTodosContext } from '../contexts/TodosContext';
function Home(){
  const {todos,addTodo,removeFromTodos} = useTodosContext()
  const [todo,setTodo]=useState("");


  function createTodo(e){
    e.preventDefault(); 
    if (todo.trim() === "") return;

    const newTodo = {
      id: Date.now(), 
      text: todo,
    };
    addTodo(newTodo);
    setTodo("");

  }
    return <div className="todo-creation">
        <form onSubmit={createTodo} className="todo-form">
        <input
          type="text"
          placeholder="Enter Todo"
          className="todo-input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className='todo-create'>
          Create
        </button>
      </form>
    </div>

}
export default Home;