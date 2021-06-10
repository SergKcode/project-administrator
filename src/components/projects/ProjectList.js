import React, { useContext, useEffect } from 'react';
import Project from './Project';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ProjectList = () => {

    const projects =[
        {name: "e-commmerce"},
        {name: "Football web"},
        {name: "Dashboard app"},
    ]

    return ( 

        <ul className="listado-proyectos">

            <TransitionGroup>
                {projects.map(project => (
                    <CSSTransition
                        key={project._id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Project
                            project={project}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
     );
}
 
export default ProjectList;