import React, { useContext } from 'react';

const Task = () => {


    return ( 
        <li className="tarea sombra">
            <p></p>

            <div className="estado">
                        <button
                            type="button"
                            className="completo"
                            onClick={""}
                        >Completo</button>
                 
                        <button
                            type="button"
                            className="incompleto"
                            onClick={"() => cambiarEstado(tarea)"}
                        >Incompleto</button>
              
            </div>

            <div className="acciones">
                <button 
                    type="button"
                    className="btn btn-primario"
                    onClick={""}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={""}
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Task; 