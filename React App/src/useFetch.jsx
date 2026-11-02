import { useState,useEffect } from 'react';

const useFetch=((url)=>{
    
    const [data, setData]=useState(null);

    //dummy data
    const [dummy,setDummy]=useState(true); 

    const [error,setError]=useState(null);

useEffect(()=>{
        setTimeout(()=>{
        
        
        fetch(url)
        .then(response=>{
            if(!response.ok){
                throw Error("Couldn't Retrive Data...")
            }
            console.log(response);
            return response.json()
        }).then(data=>setData(data))
        .catch((error)=>{
            console.log(error.message); 
            setError(error.message);
        })
    },1500)    
    },[]);    

    return[data,dummy,error]
})

export default useFetch;