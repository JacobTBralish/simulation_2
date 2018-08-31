import React from 'react';
import { Link } from 'react-router-dom';


function Header (){
    return(
        <div>
            <div><Link to='/'>Dashboard</Link></div>
            <div><Link to='/Wizard'>Add New Property</Link></div>
            
        </div>
    )
}

export default Header;