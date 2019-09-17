import React from 'react';
import axiosWithCred from '../axiosWithCred';

const Logout = (props) => {
    console.log('props in logout', props)
 function Remove () {
     axiosWithCred
     .get("http://localhost:4000/api/users/logout")
     .then(res => console.log(res))
     .catch(err => console.log(err))
     props.history.push('/')

 }
    return(
        <div className="logout">
            <button onClick={()=> {
                Remove()}}>Logout</button>
        </div>
    )
}

export default Logout;