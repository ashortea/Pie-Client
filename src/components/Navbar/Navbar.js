import React from 'react';
import './Navbar.css';
import piePic from '../../assets/pie.jpg';
import Logout from './Logout/Logout';
const Navbar = (props) => { 
    return(
        <div> 
            <nav>
                <img id="piePic" src={piePic} alt="pie" />
                <Logout setSession={props.setSession} />
            </nav>
            </div>
    )
}

export default Navbar;
