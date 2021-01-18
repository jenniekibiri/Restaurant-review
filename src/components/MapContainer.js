import React, { Component } from "react";
import "../css/style.css";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import StarRatings from "react-star-ratings";
import places from "../places.json";
require("dotenv").config();

const mapCenter = {
  lat: -1.2845056,
  lng: 36.817786,
};

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
      mapCenter: mapCenter,
      newRestaurants: [],
        author_name: "", //user data
      email: "",
      isLoaded: false,
      dataLoaded: false,
      rating: 0,
      text: "",
    };


    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e){
    e.preventDefault()
    console.log('submit')
  }
 

  addRestaurant(){
    console.log("clicked")
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
  componentDidMount() {
    this.onMapClicked = (props, map, e) => {
      const { newRestaurants } = this.state;

      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null,
        });
      }
      let lat = e.latLng.lat();
      let lng = e.latLng.lng();
      newRestaurants.push({ lat, lng });

      this.setState((prevState) => ({
        mapClicked: true,
        newRestaurants,
      }));
    };
  
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
          initialCenter={this.state.mapCenter}
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
          {this.state.newRestaurants.map((newRestaurant, i) => (
            <Marker
              key={i}
            
              position={newRestaurant}
               onClick={this.onMarkerClick}
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
                <StarRatings
                  starRatedColor="yellow"
                  rating={this.state.selectedPlace.rating}
                  starDimension="20px"
                  starSpacing="1px"
                  name="rating"
                />
                <img
                  src={this.state.selectedPlace.photo}
                 
                  className=" np-img-wrapper card-img np-img-expand"
                  alt="..."
                />
             
               <form onSubmit={this.handleSubmit}>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" placeholder="Enter email" id="email"/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  <div class="form-group form-check">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox"/> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
             
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
