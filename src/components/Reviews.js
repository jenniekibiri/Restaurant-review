import React, { Component } from 'react'
import {  Element} from 'react-scroll'
import places from '../places.json'
import '../css/style.css'
export class Reviews extends Component {
    render() {
        return (
            <div>
            
                 <div className="dropdown">
        <i  type="button"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                  className="material-icons np-colorize np-element mr-2 reviews">expand_more</i> 
  
 <div className="dropdown-menu  card-body np-shadow-inverse  " style={{width: "16rem"}}   aria-labelledby="dropdownMenuButton">
 
        <Element name="test7" className="element" id="containerElement" style={{
          position: 'relative',
          height: '250px',
          overflow: 'scroll',
          marginBottom: '0px'
        }}>

            {places.map((place, i) => { 
              
                return(
     <div>

      <div className="row">

     <div className="col-md-4">
  <img src={require('../assets/71217457.webp')} height="50px" width="50px" className=" img-fluid rounded-circle" alt="..."/>
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

      <p style={{fontSize: "15px"}} className="text-muted">{
       
      place.ratings[0].comment
      
      }
</p>
    </div>
                  
                )
              })}
   
    

          </Element>
  </div>

</div> 
            </div>
        )
    }
}

export default Reviews
