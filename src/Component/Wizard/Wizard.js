import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateState, updateZip, getHouses } from '../../Redux/reducer';



class Wizard extends Component {


    handlePost(name, address, city, state, zip){
        axios.post('/api/houses', {name, address, city, state, zip}).then().catch(err => {
                console.log(err)
        })
    }

    handleEdit(id, name, address, city, state, zip){
        axios.put(`/api/inventory/${ id }`, {name, address, city, state, zip}).then(res => {
            this.props.history.push('/')}).catch(err => {
                console.log(err)
        })
    }

    render(){
        let { id } = this.props.match.params;
        console.log(id)
        let {name, address, city, state, zip, updateName, updateAddress, updateCity, updateState, updateZip} = this.props;
        return(
            <div>
                
                <input placeholder='Property Name:' onChange={e => updateName(e.target.value)} value={name}></input>
                <input placeholder='Address:' onChange={e => updateAddress(e.target.value)} value={address}></input>
                <input placeholder='City:' onChange={e => updateCity(e.target.value)} value={city}></input>
                <input placeholder='State:' onChange={e => updateState(e.target.value)} value={state}></input>
                <input placeholder='Zip:' onChange={e => updateZip(e.target.value)} value={zip}></input>
                <Link to='/'><button>Cancel</button></Link>
                <button onClick={() => this.handlePost(name, address, city, state, zip)}><Link to='/Wizardtwo'>Next Step</Link></button>
                <button onClick={() => {this.handleEdit( id, name, address, city, state, zip )}} >Save</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        houses: state.houses
    }
}
const mapDispatchToProps = {
    updateName,
    updateAddress,
    updateCity,
    updateState,
    updateZip,
    getHouses
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizard)