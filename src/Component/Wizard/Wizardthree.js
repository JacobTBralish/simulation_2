import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { displayMorgage, displayRent } from '../../Redux/reducer';



class Wizardthree extends Component {
    constructor(){
        super();
        this.state ={
            message: '',
            sum: null,
            rent: '',
            morgage: ''
        }
    }


    addCost(morgage, rent){
        axios.post('/api/houses', { morgage, rent }).then().catch(err => {
                console.log(err)
        })
    }

    approxRent(num){
        this.setState({
            sum: num * 1.25
        })
    }
    // handleMorgage(val){
    //     this.setState({
    //         morgage: val
    //     })
    // }
    // handleRent(){
    //     this.setState({
    //         rent: val
    //     })
    // }

    render(){
        let {  morgage, rent } = this.props;
        return(
            <div>
                <p>{this.state.message}</p>
                <input value={morgage} placeholder='Morgage:' onChange={e => displayMorgage(e.target.value)} ></input>
                <input placeholder='Rent:' onChange={e => displayRent(e.target.value)} value={rent}></input>
                <Link to='/'><button>Cancel</button></Link>
                <button><Link to='Wizardtwo'>Previous</Link></button>
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
    displayRent
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizardthree)