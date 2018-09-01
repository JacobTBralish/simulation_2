import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { displayMorgage, displayRent } from '../../Redux/reducer';



class Wizardthree extends Component {


    addCost(morgage, rent){
        axios.post('/api/houses', { morgage, rent }).then().catch(err => {
                console.log(err)
        })
    }

    render(){
        let { /* addCost, */ morgage, rent } = this.props;
        return(
            <div>
                
                <input placeholder='Morgage:' onChange={e => displayMorgage(e.target.value)} value={morgage}></input>
                <input placeholder='Rent:' onChange={e => displayRent(e.target.value)} value={rent}></input>
                <Link to='/'><button>Cancel</button></Link>
                <button onClick={() => this.addCost(morgage, rent)}>Add House</button>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        morgage: state.morgage,
        rent: state.rent

    }
}
const mapDispatchToProps = {
    displayMorgage,
    displayRent,
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizardthree)