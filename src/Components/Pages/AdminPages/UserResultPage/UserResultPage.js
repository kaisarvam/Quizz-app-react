import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React, { useState ,useEffect }  from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const UserResultPage = () => {
    const {email} = useParams()
    const [results,setResults] = useState([]);

    useEffect(()=>{
        const url = `https://stormy-everglades-14844.herokuapp.com/myResults/${email}`;
        axios.get(url)
        .then((res)=>{
            setResults(res.data);     
        })
        
    },[email])

    let testTaken =0;
    results?.forEach((result)=>{
        testTaken = result.retake;
       return(testTaken)
   }) 

   const datas = [];
   for(let i=1;i<=testTaken;i++){
datas.push(i);
   }
   console.log( "data here is",datas);


    return (
        <div>
            <h1> Result Page</h1>
            <h3> User Email : {email} </h3>
            <h4>Total test given : {testTaken}</h4>
            {
                datas.map((data)=>{
                    return(
                        <div className="m-3">
                        <NavLink to={`/dashbord/viewUsers/UserResultPage/${email}/${data}`}> <button className="btn btn-info">Result Of Test {data}</button> </NavLink>
                        <br/>
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default UserResultPage;