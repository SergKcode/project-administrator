import React, { useContext, useState, useEffect } from 'react';  


const TaskForm = () => {


    
    const [task, saveTask] = useState({
        name: ''
    })

    
    const { name } = task;


    // Leer los valores del formulario
    const handleChange = e => {
        saveTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Task name..."
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        
                    />
                </div>
            </form>

          
        </div>
     );
}
 
export default TaskForm; 