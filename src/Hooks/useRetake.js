import axios from 'axios';
import { useEffect,useState } from 'react';
import useAuth from './useAuth';

const useRetake = () => {
    const {user} = useAuth();
    const [results,setResults] = useState();

    useEffect(()=>{
        const url = `https://stormy-everglades-14844.herokuapp.com/myResults/${user.email}`;
        axios.get(url)
        .then((res)=>{
            setResults(res.data);     
        })
     
    },[user])
    let myRetake =0;
    results?.forEach((result)=>{
        myRetake = result.retake;
       return(myRetake)
   }) 
    return {myRetake}
};

export default useRetake;