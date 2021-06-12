import React from 'react'
import Todo from './todo'
export default function todos(props) {
    <h2>todos list</h2>
    return (
        
                props.todos.map((todo)=>{
                console.log(todo.no);
                return (<Todo todo={todo} key={todo.no} onDelete={props.onDelete} addTodo={props.addTodo}/>   
                )
            }
            )
        
    )
}
