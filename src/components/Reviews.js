import React, { Component } from 'react'
import {  Element,animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import '../css/style.css'
export class Reviews extends Component {
    render() {
        return (
            <div>
                 <div class="dropdown  ">
        <i  type="button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                  className="material-icons np-colorize np-element mr-2 reviews">expand_more</i> 
  
 <div class="dropdown-menu  card-body np-shadow-inverse  " style={{width: "16rem"}}   aria-labelledby="dropdownMenuButton">
 
        <Element name="test7" className="element" id="containerElement" style={{
          position: 'relative',
          height: '250px',
          overflow: 'scroll',
          marginBottom: '0px'
        }}>
        <div>
      <div className="row">

     <div className="col-md-4">
  <img src={require('../assets/71217457.webp')} height="50px" width="50px" class=" img-fluid rounded-circle" alt="..."/>
   </div>

     <div className="col-md-8">
 <p className="font-weight-lighter" style={{fontSize: "15px"}}>jenny kibiri</p>
 
   </div>
  </div>
   
  
      <div className="text-warning">
         <span className="material-icons" style={{fontSize: "18px"}}>star</span>
 <span className="material-icons" style={{fontSize: "18px"}}>star</span>
<span className="material-icons" style={{fontSize: "18px"}}>star</span>
<span className="material-icons" style={{fontSize: "18px"}}>star</span>
 <span className="material-icons" style={{fontSize: "18px"}}>star_half</span>
 <span className="text-white text-muted "style={{fontSize: "15px"}}>(4.5)</span>
      </div>

      <p style={{fontSize: "15px"}} className="text-muted">Away home from home.
It's a real friendly place to be around Mt Kenya
</p>
    </div>

          <Element name="firstInsideContainer" style={{
            marginBottom: '80px',
              height: '100px',
         
          }}>
            <div>
      <div className="row">

     <div className="col-md-4">
  <img src={require('../assets/71217457.webp')} height="50px" width="50px" class=" img-fluid rounded-circle" alt="..."/>
   </div>

     <div className="col-md-8">
 <p className="font-weight-lighter " style={{fontSize: "15px"}}>jenny kibiri</p>
 
   </div>
  </div>

      <div className="text-warning">
         <span className="material-icons" style={{fontSize: "18px"}}>star</span>
 <span className="material-icons" style={{fontSize: "18px"}}>star</span>
<span className="material-icons" style={{fontSize: "18px"}}>star</span>
<span className="material-icons" style={{fontSize: "18px"}}>star</span>
 <span className="material-icons" style={{fontSize: "18px"}}>star_half</span>
 <span className="text-white text-muted "style={{fontSize: "15px"}}>(4.5)</span>
      </div>

      <p style={{fontSize: "15px"}} className="text-muted">Away home from home.
               It's a real friendly place to be around Mt Kenya
           </p>
    </div>
          </Element>

          <Element name="firstInsideContainer" style={{
            marginBottom: '80px',
              height: '100px',
         
          }}>
            <div>
      <div className="row">

     <div className="col-md-4">
  <img src={require('../assets/71217457.webp')} height="50px" width="50px" class=" img-fluid rounded-circle" alt="..."/>
   </div>

     <div className="col-md-8">
 <p className="font-weight-lighter" style={{fontSize: "15px"}}>jenny kibiri</p>
 
   </div>
  </div>
      <div className="text-warning">
         <span className="material-icons" style={{fontSize: "18px"}}>star</span>
 <span className="material-icons" style={{fontSize: "18px"}}>star</span>
<span className="material-icons" style={{fontSize: "18px"}}>star</span>
<span className="material-icons" style={{fontSize: "18px"}}>star</span>
 <span className="material-icons" style={{fontSize: "18px"}}>star_half</span>
 <span className="text-white text-muted "style={{fontSize: "15px"}}>(4.5)</span>
      </div>

      <p style={{fontSize: "15px"}} className="text-muted">Away home from home.
It's a real friendly place to be around Mt Kenya
</p>
    </div>
          </Element>
          
          <Element name="firstInsideContainer" style={{
            marginBottom: '80px',
              height: '100px',
         
          }}>
            <div>
      <div className="row">

     <div className="col-md-4">
  <img src={require('../assets/71217457.webp')} height="50px" width="50px" class=" img-fluid rounded-circle" alt="..."/>
   </div>

     <div className="col-md-8">
 <p className="font-weight-lighter" style={{fontSize: "15px"}}>jenny kibiri</p>
 
   </div>
  </div>
      <div className="text-warning">
         <span className="material-icons" style={{fontSize: "18px"}}>star</span>
 <span className="material-icons" style={{fontSize: "18px"}}>star</span>
<span className="material-icons" style={{fontSize: "18px"}}>star</span>
<span className="material-icons" style={{fontSize: "18px"}}>star</span>
 <span className="material-icons" style={{fontSize: "18px"}}>star_half</span>
 <span className="text-white text-muted "style={{fontSize: "15px"}}>(4.5)</span>
      </div>

      <p style={{fontSize: "15px"}} className="text-muted">Away home from home.
It's a real friendly place to be around Mt Kenya
</p>
    </div>
          </Element>
        </Element>
  </div>

</div> 
            </div>
        )
    }
}

export default Reviews
