import React, { Component } from "react";
import {  Element} from 'react-scroll'
import AddReviews from './components/AddReviews'
import Reviews from './components/Reviews'
import Map from './components/Map'
import './css/style.css'
import places from './places.json'
import Navbar from "./components/Navbar";
require('dotenv').config();

export class App extends Component {
  constructor(props){
    super(props)
    //state
    this.state={
      places:[],
      rating:[],
      name:'',
      email:'',
      comment:''
    }
    // ?why bind this
   
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

 //handle change
  handleChange(e){
    this.setState({
      //handle events for all fields
      [e.target.name]:e.target.value
    })
  }
  //handle submit
handleSubmit(e){
  e.preventDefault();
    const { name, email,comment,places,rating } = this.state;
  // localStorage.setItem('name', name);
  // localStorage.setItem('email', email);
  //   localStorage.setItem('comment', comment );

  console.log(places)
  console.log(places.id)
  console.log(rating)

 this.setState({
rating:rating.push({name,email,comment})

 })
  // console.log('submit')

}

   componentDidMount() {
        this.setState({
            places: places
        })
    }
   
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

  <Element name="test7" className="element" id="containerElement" style={{
          position: 'relative',
          height: '650px',
          overflow: 'scroll',
          marginBottom: '0px'
        }}>
 {
  this.state.places.map((place,i) =>

     <div className=" mb-3 np-element np-shadow-double" key={i} style={{width: "25rem"}}>
  <div className="row no-gutters">
    <div className="col-md-4" >
      <img src={place.photo}className=" np-img-wrapper card-img np-img-expand" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body" >
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
              {/* // check condtion id */}
                
     <div >

   
   { place.ratings.map((rating,i)=>{
    
      return(
       


         <div key={i}>

   <div className="row">

     <div className="col-md-4">
  <img src={require('./assets/71217457.webp')} height="50px" width="50px" className=" img-fluid rounded-circle" alt="..."/>
   </div>

     <div className="col-md-8">
 <p className="font-weight-lighter" style={{fontSize: "15px"}}>{rating.name}</p>
 
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

      <p style={{fontSize: "15px"}} className="text-muted">
        {rating.comment}</p>


         </div>
       )
  

       })}

    </div>
                  
                
           
   
    

          </Element>
  </div>

</div> 
<AddReviews handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>     
           
   </div>

      </div>
    </div>
  </div>
</div>


  )}
</Element>
  {/* {places.map((place, i) =>  */}
 
 

{/* end of card */}
</div>
</div>


        </div>
      </div>
    )
  }
}

export default App
