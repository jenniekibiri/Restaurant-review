import React, { Component } from "react";
import "../css/style.css";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import StarRatings from "react-star-ratings";
import places from "../places.json";
require("dotenv").config();



const mapStyles = {
  height: "100vh",
  width: "93%",
};
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapClicked: false,
      newRestaurants: [],
      author_name: "", //user data
      email: "",
      isLoaded: false,
      lat:"",
      lng:"",
      name:"",
      address:"",
      newRating:0,
      dataLoaded: false,
      showMarker:false,
      rating: 0,
      showForm: false,
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });

  onMapClicked = (props, map, e) => {
    this.setState({
      showForm: true,
      lat:e.latLng.lat(),
      lng:e.latLng.lng()
    });
    let lat = e.latLng.lat();
    let lng = e.latLng.lng();


    const { newRestaurants } = this.state;

    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,

      });
    }
    newRestaurants.push({ lat, lng });

    this.setState((prevState) => ({
      mapClicked: true,
      newRestaurants,
    }));
  };
    handleChange(e) {
    this.setState({
      //handle events for all fields
      [e.target.name]: e.target.value,
    });
  }

 handleSubmit =(e)=>{

   const {newRating,name,address,newRestaurants,lat,lng}=this.state
    e.preventDefault()
 newRestaurants.push(newRating,name,address)
 this.props.places.push({ lat, long:lng,rating:newRating,restaurantName:name,address,photo:'https://images.pexels.com/photos/2448730/pexels-photo-2448730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',ratings:[] });
this.props.handlePlaces(this.props.places)
       
        this.setState({
          showForm:false,
          showMarker:true,
          newRating:1,
          name:"",
          address:""
        })
    }

  
  render() {
  
    return (
      <div
        style={{ height: "10vh", width: "100%" }}
        className="card-img p-2  mt-5"
      >
        <Map
          google={this.props.google}
          style={mapStyles}
          zoom={13}
          initialCenter={this.props.currentPosition}
          onClick={this.onMapClicked}
        >
          <Marker
            name={"current location"}
            title={"current location"}
            // animation={this.props.google.maps.Animation.BOUNCE}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              scaledSize: new window.google.maps.Size(50, 50),
            }}
            position={this.props.currentPosition}
          />

          {this.props.googleRestaurants === undefined
            ? console.log("loading")
            : this.props.googleRestaurants.map((p, i) => {
                let photoRef = p.photos;
                var photoLink;
                if (photoRef !== undefined) {
                  photoLink = p.photos[0].photo_reference;
                } else {
                  photoLink =
                    "ATtYBwLuLqFtlr_5cBGOaYY76Orfd4fMt5F1if660Ds2dBE3Hxn8ZacI2jhI6V217ZMdf7O5NRcGPi99mGHGbju8dtGsFEvNTIMYP3Ky6Fz9XVQe_advoC68tEDGVuKG1dLs-YgS6H6N9SI4qMgUW3kqZVB-CIdY5kfPrj0IvQHEf5U3IT-C";
                }

                return (
                  <Marker
                    key={i}
                    name={p.name}
                    rating={p.rating}
                    photo={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoLink}&key=${process.env.REACT_APP_GoogleMapsApiKey}`}
                    position={p.geometry.location}
                    onClick={this.onMarkerClick}
                  />
                );
              })}

          {this.state.showForm ===true ? (
            <div style={{ position: "relative" }} className="col-md-4 ml-5 ">
             <form onSubmit={this.handleSubmit} className="np-element mt-2">
  <div className="form-group">
    
    <input type="text" className="form-control" placeholder="Restaurant Name"
     onChange={this.handleChange}
     name="name"
              value={this.state.name}
    id="name"/>
  </div>
  <div className="form-group">
  
    <input type="text" className="form-control" placeholder="Addresss"
     onChange={this.handleChange}
     name="address"
              value={this.state.address}
    id="address"/>
  </div>
   <div className="form-group">
  
    <input type="number" min="1" max="5" className="form-control" placeholder="rating"
     onChange={this.handleChange}
     name="newRating"
              value={this.state.newRating}
    id="newRating"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            </div>
          ) : (
            ""
          )}
   {/* { 
this.state.showMarker&&
   this.state.newRestaurants.map((newRestaurant, i) => {
              

                return (
                  <Marker
                    key={i}
                    name={this.state.name}
                    position={newRestaurant}
                    onClick={this.onMarkerClick}
                  />
                );
              })} */}

             {this.props.places.map((place, i) => (
            <Marker
              key={i}
              name={place.restaurantName}
              rating={place.rating}
              photo={place.photo}
              onClick={this.onMarkerClick}
              position={{ lat: place.lat, lng: place.long }}
            />
          ))}  
          {places.map((place, i) => (
            <Marker
              key={i}
              name={place.restaurantName}
              rating={place.rating}
              photo={place.photo}
              onClick={this.onMarkerClick}
              position={{ lat: place.lat, lng: place.long }}
            />
          ))}

          {this.state.showingInfoWindow === true && (
            <InfoWindow
              marker={this.state.activeMarker}
              onCloseClick={this.onInfoWindowClose}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <h6 className="text-dark">{this.state.selectedPlace.name}</h6>
                {/* <StarRatings
                  starRatedColor="yellow"
                  rating={}
                  starDimension="20px"
                  starSpacing="1px"
                  name="rating"
                /> */}
                <img
                  src={this.state.selectedPlace.photo}
                  className="  img-fluid InfoImage " 
                  alt="..."
                />
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GoogleMapsApiKey}`,
})(MapContainer);
