import React from 'react';
import { Link } from 'react-router-dom';


function Header (){
    return(
        <div>
            <div><button><Link to='/'>Dashboard</Link></button></div>
            <div><button><Link to='/Wizard'>Add New Property</Link></button></div>
            {/* <div><button><Link to='/Wizardthree'>Save Changes</Link></button></div> */}
            
        </div>
    )
}

export default Header;