import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useRetake from '../../../Hooks/useRetake';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import QuesForm from '../Shared/QuesForm';

const TakeTest = () => {
    const {user} = useAuth();
    let navigate = useNavigate();
    const {myRetake} = useRetake();
    
    const [questions,setQuestions] = useState([]);
    const [currentQues,setCurrentQues] = useState(0);
    const [quesAns,setQuesAns] = useState([])

    useEffect(()=>{
        axios.get(`https://stormy-everglades-14844.herokuapp.com/allquestion`)
        .then((res)=>{
            // console.log(res.data);
            setQuestions(res.data);
        })
    },[user])
    console.log("my questions are: ",questions);
    console.log("my retake is : ",myRetake);

    const handleUpload = (e)=>{
        console.log("inside ",quesAns);
        const url = "https://stormy-everglades-14844.herokuapp.com/quesSubmit"
        axios.post(url,quesAns)
        .then((res)=>{
            console.log("response is ",res.data);
            if(res.data.insertedCount>0){
                alert("Your answers submitted Successfully !!!")
                e.target.classList.add("disabled");
                navigate(`/dashbord/myResult`);
            }

        })
    }
    console.log("question ansered are : ",quesAns);


if(questions.length>0 && currentQues===questions.length){
    return (
        <>
        <Navbar/>
        <div>
        <h1>All question collected</h1>

        <button className="btn btn-warning" onClick={(e)=>{handleUpload(e)} }>Submit</button>

        </div>
        <Footer/>
        </>

    )
}
else{

    return (
        <>
        <Navbar/>
        <div>
            <h1>This is Test Page</h1>
            {
               questions[currentQues] &&
            <QuesForm key={questions[currentQues]?._id} question={questions[currentQues]} setQuesAns={setQuesAns} quesAns={quesAns}  setCurrentQues={setCurrentQues}  currentQues={currentQues} questions={questions}/>
            }
        </div>
        <Footer/>
        </>
    );

}
   
};

export default TakeTest;