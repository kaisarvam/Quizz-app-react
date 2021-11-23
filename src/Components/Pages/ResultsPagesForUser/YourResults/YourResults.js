import { NavLink } from 'react-router-dom';
import useRetake from '../../../../Hooks/useRetake';
import useAuth from '../../../../Hooks/useAuth'

const YourResults = () => {
    const {user} = useAuth();
    const {myRetake} = useRetake();
    const retakeCount = myRetake;
    const datas = [];
    for(let i=1;i<retakeCount;i++){
 datas.push(i);
    }
    console.log(datas);
    return (
        <>
        <div>
           <h1>Results for User ( {user.displayName.toUpperCase()} ) </h1>
           <h3>Total test Given : {Number(retakeCount)}</h3>
           <h3>Retake : {
           (retakeCount>0)?
           <>{retakeCount-1}</>
           :
           <>{0}</>
           }</h3>
           { (retakeCount>0)? 
           <NavLink to={`/dashbord/myResult/RetakeResult/1`}> 
            <button className="btn btn-warning m-2">
                First test 
                       </button>
                       </NavLink>
                       :
                       <> </>
        }
        <br/>
           {
               datas.map((data)=>{
                   return(
                       <>
                       <NavLink to={`/dashbord/myResult/RetakeResult/${data+1}`}> 
                       <button className="btn btn-warning m-2">
                       Retake page : {data} 
                       </button>
                       </NavLink>
                       <br/>
                       </>
                   )
               })
           }
        </div>
        </>
    );
};

export default YourResults;







// <h1> myTotal retake is : {results.forEach((result)=>{
//     myRetake = result.retake -1;
//    return(myRetake)
// }) } {myRetake}</h1>
// <h1 className="mb-5 mt-2">Your Results page</h1>
// {
//    filterTest.map((result)=>{
//        return(
//            <div key={result._id}>
//                {
//                    result.retake?
//                    <>
//                    <h1>Retake:{result.retake}</h1>
//                    </>
//                    :
//                    <> </>
//                }
//                <h2>Question : {result.question}</h2>
//                {
//                    (result.yourAns===result.correctAns)?
//                    <> 
//                     <h3 className="text-success">Your ans : {result.yourAns}</h3>
//                <h3>correct ans : {result.correctAns}</h3>
//                    </>
//                    :
//                    <>
//                    <h3 className="text-danger">Your ans : {result.yourAns}</h3>
//                <h3>correct ans : {result.correctAns}</h3>                        
//                     </>
//                }
//                <br/>
//                <br/>
//            </div>
//        )
//    })
// }