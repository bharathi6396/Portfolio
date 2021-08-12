import React from 'react'
// import Navigation from '../components/Navigation'
import ProjectList from '../components/portfolio/ProjectList'
import { NavLink } from 'react-router-dom';
const Portfolio = () => { 

    return (
        <div className="portfolio">
            {/* <Navigation /> */}
            <ProjectList/>
            <NavLink exact to="/">
        <button>Acceuil </button>
    </NavLink>  
        </div>
    );
};
export default Portfolio;