import React, { Component } from 'react';
// import { connect } from 'react-redux';
import House from '../House/House';



class Dashboard extends Component {
    render(){
        return(
            <div>
                Dashboard
                <House />
            </div>
        )
    }
}

export default /* connect(mapStateToProps, mapDispatchToProps) */(Dashboard)