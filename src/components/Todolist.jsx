
import React from 'react';
import { useTodoContext } from '../providers/TodoProvider';

const TodoList = () => {
    const { todoList, removeTodo  } = useTodoContext(); // Utilisation de la bonne variable todoList

    return (
        <ul>
            {todoList.map((todo, index) => (
                <li key={index}>{todo} 

            <button onClick={() => removeTodo(index)}>x</button>
                </li> // Ajout de la clé et retour de l'élément li
                
            ))}
           
        </ul>
    );
};

export default TodoList;
