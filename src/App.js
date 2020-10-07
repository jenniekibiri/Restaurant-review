import React, { Component } from 'react'
import AddReviews from './components/AddReviews'
import Reviews from './components/Reviews'
import './css/style.css'
export class App extends Component {

  render() {
    return (

<div>
         
  <nav class="navbar navbar-expand-lg np-element fixed-top">
     <a class="navbar-brand  ml-5" href="#">
    <img src={require('./assets/logo.png')} width="30" height="30" class=" mr-2" alt="" loading="lazy"/>
     <span className=" np-element  np-square-xxl np-shadow">    Reviews City</span>
     </a>
</nav>

  <div className="row">
  
      <div className="col-md-8 pr-5 mt-5 np-element " > 
    <img src={require('./assets/map.png')} class="card-img p-2  mt-5"  alt="..."/>
  </div>

<div className="col-md-4 mt-5 np-element ">

    <div className="row mt-5">

{/* card two */}
     <div class=" mb-3 np-element np-shadow-double" style={{width: "25rem"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={require('./assets/food.jpg')}class=" np-img-wrapper card-img np-img-expand" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5>White Rhino Hotel</h5>
        <div className=" row ml-2  text-warning"  >
        
         <p className="text-white" style={{fontSize: "15px"}}>4.7</p>  
  
    <span className="material-icons" style={{fontSize: "18px"}}>star</span>
 <span className="material-icons" style={{fontSize: "18px"}}>star</span>
<span className="material-icons" style={{fontSize: "18px"}}>star</span>
<span className="material-icons" style={{fontSize: "18px"}}>star</span>
 <span className="material-icons" style={{fontSize: "18px"}}>star_half</span>
 <span className="text-white text-muted "style={{fontSize: "15px"}}>(250)</span>

</div>
<span class="mb-4 ml-2"  style={{fontSize: "15px"}}>Kimathi way </span>

   <div className="row mt-3">
        
<Reviews/>

 

    <AddReviews/>     
           
   </div>

      </div>
    </div>
  </div>
</div>

</div>
</div>

        </div>
      </div>
    )
  }
}

export default App
