import '../css/TodoCard.css';
import {useTodosContext} from '../contexts/TodosContext.jsx';
function TodoCard({ todo }) {
     const {removeFromTodos} = useTodosContext()

  function todoDate(todo) {
    return new Date(todo.id).toLocaleString(); 
  }

  return (
    <div className="todo-container">
      <div className="todo-card">
        <div className="todo-content">
          <h3>{todo.text}</h3>
        </div>
        <div className="todo-right">
          <p className="todo-date">{todoDate(todo)}</p>
          <button 
            className="todo-delete-button"
            onClick={() => removeFromTodos(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
