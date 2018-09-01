import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

function House (props){

    function handleDelete( id ){
        axios.delete(`/api/houses/${id}`).then(() => {
           window.location.reload()}).catch(err => {
                console.log(err)
        })
    }

    
    return(
        <div>
            {/* <p>{props.img}</p> */}
            <p>{props.name}</p>
            <p>{props.address}</p>
            <p>{props.city}</p>
            <p>{props.state}</p>
            <p>{props.zip}</p>
            {/* <p>{props.margage}</p> */}
            {/* <p>{props.rent}</p> */}
            <button onClick={() => handleDelete( props.id )}> Delete </button>
             <Link to={`/edit/${ props.id }`}><button>edit</button></Link>
        </div>
    )
}

export default (withRouter(House));