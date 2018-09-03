import React, { Component } from 'react';
import { connect } from 'react-redux';
import House from '../House/House';
import axios from 'axios';
import { getHouses } from '../../Redux/reducer';
// import '../../App.css';




class Dashboard extends Component {

    componentDidMount(){
        setTimeout(() => axios.get('/api/houses').then(res => {
            this.props.getHouses(res.data)}).catch(err => {
                console.log(err)
        }), 1000)
    }



    render(){
        let { houses } = this.props;
        let displayHouses= houses.map((house, index) => {
            return <div key={ index }>
                    <House {...house} /></div>
        })
        return(
            <div>
                
                {displayHouses}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
    houses: state.houses
    }
}
const mapDispatchToProps = {
    getHouses
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)