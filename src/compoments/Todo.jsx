import TodoCard from "./TodoCard";
import { useTodosContext } from "../contexts/TodosContext";
function Todo(){

    const {todos}= useTodosContext();

    if(todos[0]){
        return (
        <div>
            <h2> Your Todos</h2>
        <div >
          {todos.map((todo) => (
            <TodoCard todo={todo} key={todo.id} />
          ))}
           </div>
        </div>)
    }
    return <div>
        <h2>No Todos yet.</h2>
    </div>
}

export default Todo;