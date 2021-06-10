import React, { Fragment, useContext} from 'react';
import Task from './Task';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TaskForm from './TaskForm';

const TaskList = () => {

    const tasks =[
        {name: "e-commmerce", status:true},
        {name: "Football web", status:false},
        {name: "Dashboard app", status:true},
    ]


    return ( 
        <Fragment>
            <h2>Proyecto: </h2>

            <ul className="listado-tareas">
            {tasks.length === 0 
                    ? (<li className="tarea"><p>No hay tareas</p></li>) 
                    : 
                    <TransitionGroup>
                    {tasks.map(task => (
                        <CSSTransition
                            key={task.id}
                            timeout={200}
                            classNames="tarea"
                        >
                            <TaskForm 
                                task={task}
                            />
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                }
                
            </ul>

            <button     
                type="button"
                className="btn btn-eliminar"
                onClick={""}
            >Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default TaskList; 