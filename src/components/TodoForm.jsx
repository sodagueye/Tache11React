// import React from 'react'
// import { useTodoContext } from '../providers/TodoProvider'
// import React, { useState } from 'react';
// const  TodoForm = () => {
//     const {getNumberOfTodoItems} = useTodoContext();
//     const [todoItem ,setTodoItem]= useState("");
//     const handleOnSubmit = () =>{
//         console.log("new todo => " , todoItem)
//     }
//   return (
//     <form onSubmit={handleOnSubmit}>
//         <h3> Number of todo items:{getNumberOfTodoItems()}</h3>
//         <input type="text" value={todoItem} onChange={e=>setTodoItem(e.target.value)} />
//         <button type='submit'> Submit</button>
//     </form>
//   )
// }

// export default TodoForm
import React, { useState } from 'react'; 
import { useTodoContext } from '../providers/TodoProvider';

const TodoForm = () => {
    const { getNumberOfTodoItems , addTodo} = useTodoContext(); 
    const [todoItem, setTodoItem] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault(); // Empêcher le comportement par défaut du formulaire
        if(!todoItem){
            return;
        }
        addTodo(todoItem)
        setTodoItem("")
        // console.log("new todo => ", todoItem);
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <h3>Number of todo items: {getNumberOfTodoItems()}</h3> {/* Appel de la fonction getNumberOfTodoItems */}
            <input type="text" value={todoItem} onChange={e => setTodoItem(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default TodoForm;
