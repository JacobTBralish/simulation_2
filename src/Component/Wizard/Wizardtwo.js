import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateImg, addNewImg } from '../../Redux/reducer';




class Wizardtwo extends Component {
    constructor() {
        super();
            this.state ={
                img: ''
            }
    }


    handlePostImg(img){
        axios.post('/api/houses', {img}).then().catch(err => {
                console.log(err)
        })
    }

    render(){
        let { updateImg, img } = this.props;
        console.log(img)
        return(
            <div>
                
                <input placeholder='Image URL:' onChange={e => updateImg( e.target.value)} value={img}></input>
                <Link to='/'><button>Cancel</button></Link>
                <button><Link to='Wizard'>Previous</Link></button>
                <button onClick={() => this.handlePostImg(img)} ><Link to='/Wizardthree'> Next Step</Link></button>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        img: state.img
    }
}
const mapDispatchToProps = {
    updateImg,
    addNewImg
}

export default connect(mapStateToProps, mapDispatchToProps)(Wizardtwo)