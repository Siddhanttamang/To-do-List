import { createContext,useState,useContext,useEffect } from "react";

const TodosContext= createContext();

export const useTodosContext= ()=> useContext(TodosContext);

export const TodosProvider= ({children})=>{
    const[todos,setTodos]=useState([]);
    useEffect(()=>{
        const storedTodos= localStorage.getItem("todos");
        if(storedTodos){
            setTodos(JSON.parse(storedTodos));
        }
    },[]);

    
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    const addTodo= (todo)=>{
        setTodos(prev=>[...prev,todo]);
    }
    const removeFromTodos= (todoId)=>{
        setTodos(prev=>prev.filter(todo=>todo.id!==todoId));
    }

    const value={
        todos,
        addTodo,
        removeFromTodos,
        
    }

    return <TodosContext.Provider value={value}>
        {children}
    </TodosContext.Provider>
    
}  