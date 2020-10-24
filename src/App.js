import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import AddReviews from './components/AddReviews'
import Reviews from './components/Reviews'
import './css/style.css'
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class App extends Component {
    static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (

<div>
         
  <nav className="navbar navbar-expand-lg np-element fixed-top">
     <a className="navbar-brand  ml-5" href="#">
   
     <span className=" np-element  np-square-xxl np-shadow brand">    Reviews City</span>
     </a>
</nav>

  <div className="row">
  
      <div className="col-md-8 pr-5 mt-5 np-element " > 
      <div  style={{ height: '100vh', width: '100%' }}  className="card-img p-2  mt-5" >
        <GoogleMapReact
          bootstrapURLKeys={process.env.MAPKEY}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={<i className="material-icons text-danger">place</i>}
          />
           
        </GoogleMapReact>
      </div>
  </div>

<div className="col-md-4 mt-5 np-element ">

    <div className="row mt-5">

{/* card two */}
     <div className=" mb-3 np-element np-shadow-double" style={{width: "25rem"}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={require('./assets/food.jpg')}className=" np-img-wrapper card-img np-img-expand" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5>White Rhino Hotel</h5>
        <div className=" row ml-2  text-warning "  >
        
         <p className="text-white" style={{fontSize: "15px"}}>4.7</p>  
  
    <span className="material-icons" style={{fontSize: "18px"}}>star</span>
 <span className="material-icons" style={{fontSize: "18px"}}>star</span>
<span className="material-icons" style={{fontSize: "18px"}}>star</span>
<span className="material-icons" style={{fontSize: "18px"}}>star</span>
 <span className="material-icons" style={{fontSize: "18px"}}>star_half</span>
 <span className="text-white text-muted "style={{fontSize: "15px"}}>(250)</span>

</div>
<span className="mb-4 ml-2"  style={{fontSize: "15px"}}>Kimathi way </span>

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
