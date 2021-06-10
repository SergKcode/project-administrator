import React, { useContext } from 'react';


const Project = ({project}) => {
  

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick="{ }"
            >{project.nombre} </button>
        </li>
     );
}
 
export default Project;