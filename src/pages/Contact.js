import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { NavLink } from 'react-router-dom';
// import Navigation from '../components/Navigation'
const Contact = () => {

    return (
        <div className="contact">
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fa fa-home"></i>
                            <span>Ile-de-france</span>
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            <CopyToClipboard text="0662033586">
                                <span className="clickinput"
                                    onClick={() => { alert('Mobile number is copied!'); }}>
                                    06 62 03 35 86</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="fa fa-envelope"></i>
                            <CopyToClipboard text="monmail@gmail.com">
                                <span className="clickinput"
                                    onClick={() => { alert('Mail id is copied!'); }}>
                                    bharathiraj.ece@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className ="socialNetwork">
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
            {/* <Navigation/> */}
            <NavLink exact to="/">
        <button>Acceuil </button>
    </NavLink>
        </div>
    );
};
export default Contact;
