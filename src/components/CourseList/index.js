import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addTodoAction(todo) {
    return { type: 'ADD_TODO', todo};
}

export default function CourseList() {
    const todoList = useSelector(state => state.data);

    /* Função igual a de cima
    const courses = useSelector(state => {
        return state.data
    }, [variavel])  

    esse segundo parametro diz quais variaveis a função tem q monitorar, 
    se ela não for alterada a função não é executada
    */

    const dispatch = useDispatch();

    function addTodo() {
        var valueTodo = document.getElementById("addTodo").nodeValue;
        dispatch(addTodoAction(valueTodo));
        valueTodo.value = "";
    }

    return (
        <div>
            <ul>
                { todoList.map(todo => <li key={ todo }>{ todo }</li>) }
            </ul>
            <input type="text" id="addTodo"></input>
            <button type="button" onClick={addTodo}>
                Add to do
            </button>
        </div>

    )
}