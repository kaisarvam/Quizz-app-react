import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import useRetake from '../../../Hooks/useRetake';

const QuesForm = (props) => {
    const {user} = useAuth();
    const {myRetake} = useRetake();
    const {question,setQuesAns,quesAns,setCurrentQues,currentQues,questions,setRetakeCount} = props;
    const { register, handleSubmit, formState: { errors } } = useForm();
   
    useEffect(()=>{

    },[myRetake ,user])
 

    const onSubmit = data => {
        data.retake = myRetake+1;
        data.email = user.email;
        delete data._id ;
        data.UserName = user.displayName;
        if(currentQues<questions.length+1){
            setCurrentQues(currentQues+1);
             const newState = [...quesAns,data];
        setQuesAns(newState);
        }else{
            
       alert("last page")
           
        }
       
      


        
    }

    return (
         <div key={question._id} className="m-5" id={question._id}>
                             <form onSubmit={handleSubmit(onSubmit)}>
                                 <h3> {question.question} </h3>
                                 <input  id={question._id} type="hidden" defaultValue={question._id}  {...register("_id", { required: true })} />
                                 <input  id={question.question} type="hidden" defaultValue={question.question}  {...register("question", { required: true })} />
                                 <input  id={question.correctAns} type="hidden" defaultValue={question.correctAns}  {...register("correctAns", { required: true })} />
                          <input type="radio" id={question.opt1} name="yourAns" value={question.opt1} {...register("yourAns", { required: true })} />
                          <p className="d-inline ms-3 fw-bold">{question.opt1}</p>
                          <br/>
                          <input type="radio" id={question.opt2} name="yourAns" value={question.opt2} {...register("yourAns", { required: true })} />
                          <p className="d-inline ms-3 fw-bold">{question.opt2}</p>
                          <br/>
                           <input type="radio" id={question.opt3} name="yourAns" value={question.opt3} {...register("yourAns", { required: true })} />
                           <p className="d-inline ms-3 fw-bold">{question.opt3}</p>
                          <br/>
                          <input type="radio" id={question.opt4} name="yourAns" value={question.opt4} {...register("yourAns", { required: true })} />
                          <p className="d-inline ms-3 fw-bold">{question.opt4}</p>
                          <br/>
                          <br/>
                          {errors.yourAns && <span className="text-danger">This field is required</span>}
                          <br/>
                          <br/>
                          <button className="btn btn-primary " type="submit" onSubmit={(e)=>{e.target.classList.add("bg-warning") }}>
                              
                          {       
                          (currentQues === questions.length-1)?
                          <> Submit page </>
                          :
                          <>Next</>
                            }

                          </button>
                        </form>
                   </div>
    );
};

export default QuesForm;