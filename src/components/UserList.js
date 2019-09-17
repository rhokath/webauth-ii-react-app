import React, {useState, useEffect} from 'react';
import axioswithCred from '../axiosWithCred';
import Logout from "./Logout";
import {Route} from 'react-router-dom';

const UserList = () => {
    const [userList, setUserList] = useState([]);
    const getData = () => {
        axioswithCred
        .get('http://localhost:4000/api/users/users')
            .then(res => {
                console.log(res)
                setUserList(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(()=> {
        getData()
    }, [])
    return(
        <div className="userList">
            <Route path="/users/" component={Logout}/>
            <h1>hello from user list component</h1>
            {userList && userList.map(user => {
                return <p className="user" key={user.id}>{user.username}</p>
            })}
            
        </div>
    )
}

export default UserList;