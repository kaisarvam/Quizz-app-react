import axios from 'axios';
import React, { useState ,useEffect } from 'react';
import { useParams } from 'react-router';

import useAuth from '../../../../Hooks/useAuth';

const RetakeResult = () => {
    const {user} = useAuth();
    const {ReId} = useParams()
    const [results,setResults] = useState([]);
    useEffect(() => {
        const url = `https://stormy-everglades-14844.herokuapp.com/myRetake/${user.email}/${ReId}`;
        axios.get(url)
        .then((res)=>{
            setResults(res.data);     
        })

    }, [])
    console.log("user email is : ",user.email);

    console.log("retake result found : ",results);
    return (
        <>
     
        <div>
            {
                (ReId<2)?
                <> <h1 className="m-4">This is Your result page</h1> </>
                :
                <> <h1 className="m-4">This is Retake {ReId-1} result page</h1> </>

                
            }
           
            {results.map((result)=>{
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

        </>
    );
};

export default RetakeResult;