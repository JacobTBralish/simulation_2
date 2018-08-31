// import React, { Component } from 'react';
// // import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { connect } from 'react-redux';
// import { updateImg, /* addNewImg */ } from '../../Redux/reducer';



// class Wizardtwo extends Component {


//     handlePostImg(img){
//         axios.post('/api/houses', {img}).then().catch(err => {
//                 console.log(err)
//         })
//     }

//     render(){
//         let { updateImg, img } = this.props;
//         return(
//             <div>
                
//                 <input placeholder='Image URL:' onChange={e => updateImg(e.target.value)} value={img}></input>
//                 <Link to='/'><button>Cancel</button></Link>
//                 <button onClick={() => this.handlePostImg(img)}>Add House</button>

//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         img: state.img
//     }
// }
// const mapDispatchToProps = {
//     updateImg,
//     /* addNewImg */
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Wizardtwo)