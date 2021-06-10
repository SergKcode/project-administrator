import React, {useState} from 'react'

const NewProject = () => {

    const [project, saveProject] = useState({
        name: ''
    });

    
    const { name } = project;

    // Lee los contenidos del input
    const onChangeProyecto = e => {
        saveProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    
    const onSubmitProject = e => {
        e.preventDefault();

        
    }

    // Mostrar el formulario
    const onClickForm = () => {
        
    }
    return ( 
        <>
            <button 
                type="button"
                className="btn btn-block btn-primario"
                onClick={ onClickForm }
            >Nuevo Proyecto</button>

    
                <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProject}
                >
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Project Name"
                        name="name"
                        value={name}
                        onChange={onChangeProyecto}
                    />

                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Add Project"
                    />

                </form>
                

            
        </>
    )}

export default NewProject