import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';

const ViewQuestions = () => {
    const navigate = useNavigate()
    let i = 0;
    const [questions,setQuestions] = useState([]);
    useEffect(()=>{
        const url =`https://stormy-everglades-14844.herokuapp.com/allquestion`
axios.get(url)
.then((res)=>{
    setQuestions(res.data);
})
    },[])

const deleteQuestion = (delete_id)=>{
// eslint-disable-next-line no-restricted-globals
const check = confirm("do you want to delete it ?");
if(check){
    const url = `https://stormy-everglades-14844.herokuapp.com/deleteQuestion/${delete_id}`;
    axios.delete(url)
    .then((res)=>{
        console.log("delete response is ", res.data);
        if(res.data){
            alert("successfully deleted !!!")
            window.location.reload();
        }
        
    })
}else{
    return;
}
    
}


    return (
        <div>
            <h1>View Question page</h1>
            {
                questions.map((question)=>{
                    i++;
                    return(
                        <div key={question._id} className ="m-4">
                            <h1 className=" fw-bold"> Question no {i}</h1>
                            <h3 className="fw-bold">Question : {question.question}</h3>
                            <h4 className="fw-bold" >Options : {question.opt1} ,  {question.opt2} , {question.opt3} ,  {question.opt4}</h4>
                            <h4 className="fw-bold" >Correct Ans : {question.correctAns}</h4>
                            <div className="d-flex justify-content-center">
                            <button className="btn btn-danger me-3 "
                            onClick={()=>{deleteQuestion(question._id)}}
                            > Delete question </button>
                          <NavLink to={`/dashbord/viewQuestion/updateQuestion/${question._id}`}> 
                           <button className="btn btn-warning"> Update question </button> 
                           </NavLink>
                            </div>
                            <hr/>
                            
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default ViewQuestions;