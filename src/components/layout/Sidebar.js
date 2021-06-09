import React from 'react';
import NewProject  from '../projects/NewProject';
import ProjectList from '../projects/ProjectList';



const Sidebar = () => {
    return ( 
        <aside>
            <h1>Project<span>Administrator</span></h1>

            <NewProject/>

            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                < ProjectList/>
            </div>
        </aside>
     );
}
 
export default Sidebar;