import React from 'react'
import { NavLink } from 'react-router-dom';
const Navigation = () => {

    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/shortcut-icon/Bharathi.jpg" alt="profile pic" width="200px" height="200px" />
                    <h1> Bharathi RAJENDRAN </h1>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fa fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Knowledges" activeClassName="navActive">
                            <i className="fa fa-briefcase"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Portfolio" activeClassName="navActive">
                            <i className="fa fa-desktop"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Contact" activeClassName="navActive">
                            <i className="fa fa-globe"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li> <a href="https://www.linkedin.com/in/bharathi-rajendran-b48318173/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    </li>
                    <li> <a href="https://github.com/bharathi6396" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                    </a>
                    </li>
                    <li> <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-envelope"></i>
                    </a>
                    </li>
                </ul>
            </div>
        </div>

    );
};
export default Navigation;
