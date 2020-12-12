import React, { Component } from "react";
import AddReviews from './components/AddReviews'
import Reviews from './components/Reviews'
import Map from './components/Map'
import './css/style.css'
import places from './places.json'
import Navbar from "./components/Navbar";
require('dotenv').config();

export class App extends Component {
  render() {
    return (
     <div>
         
  <Navbar/>

  <div className="row">
  
      <div className="col-md-8 pr-3 mt-4 pl-4 np-element " > 
    <Map/>
  </div>

<div className="col-md-4 mt-4   np-element ">

    <div className="row mt-5">

{/* card */}



  {places.map((place, i) => { 
  return(

  
     <div className=" mb-3 np-element np-shadow-double" style={{width: "25rem"}}>
  <div className="row no-gutters">
    <div className="col-md-4" key={i}>
      <img src={place.photo}className=" np-img-wrapper card-img np-img-expand" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body" key={i}>
<h5>{place.restaurantName}</h5>
        <div className=" row ml-2  text-warning "  >
        
         <p className="text-white" style={{fontSize: "15px"}}>4.7</p>  
  
    <span className="material-icons" style={{fontSize: "18px"}}>star</span>
 <span className="material-icons" style={{fontSize: "18px"}}>star</span>
<span className="material-icons" style={{fontSize: "18px"}}>star</span>
<span className="material-icons" style={{fontSize: "18px"}}>star</span>
 <span className="material-icons" style={{fontSize: "18px"}}>star_half</span>
 <span className="text-white text-muted "style={{fontSize: "15px"}}>(250)</span>

</div>
<span className="mb-4 ml-2" key={i}  style={{fontSize: "15px"}}>{place.address} </span>

   <div className="row mt-3">
        
<Reviews/>

 

    <AddReviews/>     
           
   </div>

      </div>
    </div>
  </div>
</div>
)

  })}

{/* end of card */}
</div>
</div>


        </div>
      </div>
    )
  }
}

export default App
