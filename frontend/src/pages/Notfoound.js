import React from 'react'
import { NavLink } from 'react-router-dom';
const NotFound = () => { 

    return (
        <div className="notFound">            
        <div className="notFoundContent">
            <h3>Sorry, we couldn't find this page</h3>
            <h4>Error 404 occurred!</h4>
            <NavLink exact to="/">
                <i className="fa fa-home"></i>
                <span>Acceuil </span>
            </NavLink>
        </div>
        </div>
    );
};
export default  NotFound;