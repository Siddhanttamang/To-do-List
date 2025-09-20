import '../css/TodoCard.css';
function TodoCard({todo}){
    function todoDate(todo){
      return String(new Date(todo.id));
      
    }
    return <div className="todo-container">

        <div className="todo-card">
            <h3>{todo.text}</h3>
            <p>{todoDate(todo)}</p>
        </div>

    </div>

 }

 export default TodoCard