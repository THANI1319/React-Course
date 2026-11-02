import Course from './Course';
import { useState,useEffect } from 'react';
import loadingImg from './assets/loading.png';
import useFetch from './useFetch';

function CourseList(){

    /* const [courses, setCourses]=useState(null);

    //dummy data
    const [dummy,setDummy]=useState(true); 

    const [error,setError]=useState(null); */

    /* useEffect(()=>{
        setTimeout(()=>{
        
        
        fetch('http://localhost:3000/courses')
        .then(response=>{
            if(!response.ok){
                throw Error("Couldn't Retrive Data...")
            }
            console.log(response);
            return response.json()
        }).then(data=>setCourses(data))
        .catch((error)=>{
            console.log(error.message); 
            setError(error.message);
        })
    },1500)    
    },[]);     */

    const [courses,dummy,error]=useFetch('http://localhost:3000/courses');

    function handleDelete(id){
        const newCourse=courses.filter((course)=>course.id !==id);
        setCourses(newCourse);

    }
       // courses.sort((a,b)=>b.price-a.price);
    
    //const vfmcources=courses.filter((course)=>course.price<300);
    if(!courses){
        return (
    <>
       {!error && (<div style={{ display:'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginTop: '100px' }}> <img src={loadingImg} alt="Content Loading..." width={480} height={340}/> <h2>Loading, please wait...</h2></div>)}
        {error && <p>{error}</p>}
    </> 
        );
    }

    const coursesList=courses.map((course)=><Course key={course.id} name={course.name} description={course.description} img={course.img} price={course.price} rating={course.rating} delete={handleDelete} id={course.id}/>)

    return(
        <>
        {coursesList}
        </>

    )
    

}
export default CourseList


//npx json-server --watch data/dummyData.json --port 3000 --static ./data
