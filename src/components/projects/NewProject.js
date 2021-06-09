import React, {useState} from 'react'

const NewProject = () => {

    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    
    const { nombre } = proyecto;

    // Lee los contenidos del input
    const onChangeProyecto = e => {
        
    }

    
    const onSubmitProyecto = e => {
        e.preventDefault();

        
    }

    // Mostrar el formulario
    const onClickFormulario = () => {
        
    }
    return ( 
        <>
            <button 
                type="button"
                className="btn btn-block btn-primario"
                onClick={ onClickFormulario }
            >Nuevo Proyecto</button>

    
                <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}
                >
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        value={nombre}
                        onChange={onChangeProyecto}
                    />

                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar Proyecto"
                    />

                </form>
                

            
        </>
    )}

export default NewProject