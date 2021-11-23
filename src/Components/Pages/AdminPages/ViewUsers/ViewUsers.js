import axios from 'axios';
import React, { useState ,useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ViewUsers = () => {
    let i = 0;
    const [users,setUsers] = useState([]);
useEffect(()=>{
    const url = `https://stormy-everglades-14844.herokuapp.com/users`
axios.get(url)
.then((res)=>{
    setUsers(res.data);
})
},[])
    return (
        <div>
            <h1 className="mt-2 mb-4 fw-bold"> Site <span className="text-warning">Users</span> List </h1>
            {
                users.map((user)=>{
                    i++
                    return(
                        <div className="m-3">
                            <h3> <span className="fw-bold">{i}.</span>  {user.name.toUpperCase()}</h3>
                           <NavLink to={`/dashbord/viewUsers/UserResultPage/${user.email}`}> <button className="btn btn-warning">See user's Result</button> </NavLink>
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default ViewUsers;