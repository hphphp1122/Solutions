import React, { useState } from 'react';

export default function AddTodo(props) { 
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const submit=(e)=>{
            e.preventDefault();
            if(!title || !description){
                {alert('enter something')}
            }
            props.addTodo(title,description);
        }
    return (
       
        <div className="container">
            <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text"  onChange={(e)=>{setTitle(e.target.value)}} value={title} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" value = {description} onChange={(e)=>{setDescription(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
   
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
</form>
        </div>
    )
}
