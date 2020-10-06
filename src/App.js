import React, { Component } from 'react'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
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
             <div class=" mb-3 np-element np-shadow-double" style={{width: "25rem"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src={require('./assets/food.jpg')}class=" np-img-wrapper card-img np-img-expand" alt="..."/>
    </div>
    <div class="col-md-8 accordion ">
      <div class="card-body ">
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

          <div className="row mt-3 dropdown">
                 <i  type="button"   className="material-icons text-warning np-shadow-border-square-push np-element mr-2 dropdown-toggle" role="button" id="dropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">expand_more</i> 
                    <span  type="button" className=" np-element np-text-success dropdown-toggle " role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">add review</span>       
  
  
          </div>

      
      </div>
    </div>
  </div>
</div>
 
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
                 <i  type="button" className="material-icons np-element mr-2">expand_more</i> 
                    <span  type="button" className=" np-element ">add review</span>       
                       <Link activeClass="active" to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
          Go to second element inside container
        </Link>
        <Element name="test7" className="element" id="containerElement" style={{
          position: 'relative',
          height: '200px',
          overflow: 'scroll',
          marginBottom: '100px'
        }}>
          test 7 (duration and container)

          <Element name="firstInsideContainer" style={{
            marginBottom: '200px'
          }}>
            first element inside container
          </Element>

          <Element name="secondInsideContainer" style={{
            marginBottom: '200px'
          }}>
            second element inside container
          </Element>
        </Element>



          </div>

      
      </div>
    </div>
  </div>
</div>
{/* card three */}
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
                 <i  type="button" className="material-icons np-element mr-2">expand_more</i> 
                    <span  type="button" className=" np-element ">add review</span>       

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
