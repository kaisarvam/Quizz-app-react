import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router';

const UpdateQuestion = () => {
    const {id}= useParams();
    const [question,setQuestion] = useState([]);
    useEffect(() => {
      const  url =`https://stormy-everglades-14844.herokuapp.com/question/${id}`
       axios.get(url)
       .then((res)=>{
           setQuestion(res.data)
           console.log("question found from db " , res.data)
       })
    }, [id])
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();


    const onSubmit = data => {
        console.log(data);
      const url = `https://stormy-everglades-14844.herokuapp.com/updateQuestion/${id}`
        axios.put(url,data)
        .then((res)=>{
          console.log("final response after ques adding :",res.data);
          navigate("/dashbord/viewQuestion");
        })
        reset();
      }


    return (
        <div>
            <h1 className="m-3"> Update Question Page</h1>
             <form onSubmit={handleSubmit(onSubmit)}>
      <p> Question </p>
      <input defaultValue={question?.question} {...register("question", { required: true })} />
      <br/>
      {errors.question && <span>This field is required</span>}
      <br/>
      <br/>

      <p> Option 1 </p>
      <input defaultValue={question?.opt1} {...register("opt1", { required: true })} />
      <br/>
      {errors.opt1 && <span>This field is required</span>}
      <br/>
      <br/>

      <p> Option 2 </p>
      <input defaultValue={question?.opt2} {...register("opt2", { required: true })} />
      <br/>
      {errors.opt2 && <span>This field is required</span>}
      <br/>
      <br/>

      <p> Option 3 </p>
      <input defaultValue={question?.opt3} {...register("opt3", { required: true })} />
      <br/>
      {errors.opt3 && <span>This field is required</span>}
      <br/>
      <br/>

      <p> Option 4 </p>
      <input defaultValue={question?.opt4} {...register("opt4", { required: true })} />
      <br/>
      {errors.opt4 && <span>This field is required</span>}
      <br/>
      <br/>

      <p> Correct Ans </p>
      <input defaultValue={question?.correctAns} {...register("correctAns", { required: true })} />
      <br/>
      {errors.correctAns && <span>This field is required</span>}
      <br/>
      <br/>
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default UpdateQuestion;