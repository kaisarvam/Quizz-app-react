import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';

const AddQuestion = () => {
  const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
  const onSubmit = data => {
      console.log(data);
    const url = `https://stormy-everglades-14844.herokuapp.com/postQuestion`
      axios.post(url,data)
      .then((res)=>{
        console.log("final response after ques adding :",res.data);
        navigate("/dashbord/viewQuestion");
      })
      reset();
    }
    
    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
      <p> Question </p>
      <input {...register("question", { required: true })} />
      {errors.question && <span>This field is required</span>}
      <br/>
      <br/>

      <p> Option 1 </p>
      <input {...register("opt1", { required: true })} />
      {errors.opt1 && <span>This field is required</span>}
      <br/>
      <br/>

      <p> Option 2 </p>
      <input {...register("opt2", { required: true })} />
      {errors.opt2 && <span>This field is required</span>}
      <br/>
      <br/>

      <p> Option 3 </p>
      <input {...register("opt3", { required: true })} />
      {errors.opt3 && <span>This field is required</span>}
      <br/>
      <br/>

      <p> Option 4 </p>
      <input {...register("opt4", { required: true })} />
      {errors.opt4 && <span>This field is required</span>}
      <br/>
      <br/>

      <p> Correct Ans </p>
      <input {...register("correctAns", { required: true })} />
      {errors.correctAns && <span>This field is required</span>}
      <br/>
      <br/>
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddQuestion;