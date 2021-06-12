import React from 'react'

export default function todo({todo,onDelete}) {

    return (
        <div className="container">
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <button className="btn btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
        </div>
    )
}
