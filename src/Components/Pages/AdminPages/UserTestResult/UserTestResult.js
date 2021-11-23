import axios from 'axios';
import React, { useState ,useEffect } from 'react';
import { useParams } from 'react-router';

const UserTestResult = () => {
    const {email,testNumber} = useParams();
    const [results,setResults] = useState();

    useEffect(()=>{
   const url =`https://stormy-everglades-14844.herokuapp.com/myRetake/${email}/${testNumber}`
   axios.get(url)
   .then((res)=>{
       setResults(res.data);
       console.log("user result found : ",res.data);
   })
    },[testNumber])

    return (
        <div>
            <h1 className="m-3 fw-bold">User's Result page</h1>
        

            {results?.map((result)=>{
                return(
                    <div key={result._id}>
                
               <h2>Question : {result.question}</h2>
               {
                   (result.yourAns===result.correctAns)?
                   <> 
                    <h3 className="text-success">Your ans : {result.yourAns}</h3>
               <h3>correct ans : {result.correctAns}</h3>
                   </>
                   :
                   <>
                   <h3 className="text-danger">Your ans : {result.yourAns}</h3>
               <h3>correct ans : {result.correctAns}</h3>                        
                    </>
               }
               <br/>
               <br/>
                    </div>
                )
            })}

        </div>
    );
};

export default UserTestResult;