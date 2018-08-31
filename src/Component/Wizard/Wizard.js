import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class Wizard extends Component {
    render(){
        return(
            <div>
                
                <input placeholder='Property Name:'></input>
                <input placeholder='Address:'></input>
                <input placeholder='City:'></input>
                <input placeholder='State:'></input>
                <input placeholder='Zip:'></input>
                <Link to='/'><button>Cancel</button></Link>
                <button>Add House</button>

            </div>
        )
    }
}

export default /* connect(mapStateToProps, mapDispatchToProps) */(Wizard)