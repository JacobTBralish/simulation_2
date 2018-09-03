import React from 'react';
import { Link } from 'react-router-dom';
// import '../../App.css';


function Header (){
    return(
        <div className='header'>
        
            <div>
                <div><button ><Link to='/' className='navButton'>Dashboard</Link></button></div>
                <div><button ><Link to='/Wizard' className='navButton'>Add New Property</Link></button></div>
                {/* <div><button><Link to='/Wizardthree'>Save Changes</Link></button></div> */}
            </div>
            <div>
                <h3 className='title'>American Dream Real Estate </h3>
                {/* <p classname='title'>American</p>
                <p classname='title'>Dream</p>
                <p classname='title'>Real</p>
                <p classname='title'>Estate</p> */}
            </div>
            
        </div>
    )
}

export default Header;