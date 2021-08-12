import React from 'react'
import Experience from '../components/knowledges/Experience';
import Hobbies from '../components/knowledges/Hobbies';
// import Navigation from '../components/Navigation';
import OtherSkills from '../components/knowledges/OtherSkills';
import Languages from '../components/knowledges/Languages';
import { NavLink } from 'react-router-dom';
const Knowledges = () => { 

    return (
        <div className= "knowledges">
              {/* <Navigation /> */}
           <div className= "knowledgesContent">
           <Experience />
           <OtherSkills />
           <Languages />
           <Hobbies /> 
        </div>
        <NavLink exact to="/">
        <button>Acceuil </button>
    </NavLink>
        </div>
      
    );
};
export default  Knowledges;