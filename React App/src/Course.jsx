import PropTypes from "prop-types";
import { useState,useEffect} from "react";

function Course(props){

    const [purchased,setPurchased]=useState(false);
    const [discountPrice,setDiscountPrice]=useState(props.price);
    

    function BuyCourse(){
        alert(`You have bought ${props.name} for ₹${discountPrice}`);
        setPurchased(true);

        
    }

    
    return(
    
      props.name &&  <div className="card">
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <h5>{props.description}</h5>
            <p>Price:₹{discountPrice}</p>
            <button id="discount" onClick={()=>setDiscountPrice(prevPrice =>( prevPrice - 50))}>Apply ₹50 Discount</button>
            <br/>
            <button onClick={BuyCourse}>Buy Now</button>
            {purchased && <p>Thank you for purchasing this course.</p>}
            <br/>
            <button onClick={()=>props.delete(props.id)}>Delete</button>

            <br/>
        </div>
    

    );
}
   
    

Course.propTypes={
    name:PropTypes.string,
    rating:PropTypes.number,
    show:PropTypes.bool,
}
export default Course