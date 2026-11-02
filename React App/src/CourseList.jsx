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
        <header style={{ 
                textAlign: 'center', 
                padding: '20px', 
                backgroundColor: '#282c34', 
                color: 'red',
                marginBottom: '20px' 
            }}>
                <h1 style={{ margin: 0 }}>My Courses</h1>
            </header>
        {coursesList}
        <footer style={{ 
                textAlign: 'center', 
                padding: '25px', 
                marginTop: '50px', 
                backgroundColor: '#282c34', 
                color: 'white' 
            }}>
                <p style={{ margin: '0 0 10px 0' }}>Developed by <strong>Thanigaivel V</strong></p>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <a 
                        href="https://github.com/THANI1319" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                        GitHub
                    </a>
                    <span>|</span>
                    <a 
                        href="https://linkedin.com/in/thanigaivel-v-" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                        LinkedIn
                    </a>
                    <span>|</span>
                       <a  href="https://thani-portfolio.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                        Portfolio
                    </a>
                    <span>|</span>
                    <a 
                        href="https://wa.me/919962139958?text=Hi%20I%20saw%20your%20React%20Course%20website" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#25D366', textDecoration: 'none', fontWeight: 'bold' }}
                    >
                        WhatsApp
                    </a>
                </div>
            </footer>
        </>

    )
    

}
export default CourseList


//npx json-server --watch data/dummyData.json --port 3000 --static ./data
