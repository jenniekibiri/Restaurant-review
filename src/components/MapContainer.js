import React, { Component } from "react";
import "../css/style.css";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
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
      mapCenter: mapCenter,
      currentPosition: {},
      locations: {},
      location: [],
    };
  }
  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  componentDidMount() {
    this.onMapClicked = (props, map, e) => {
    
      const { location, locations } = this.state;
          if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null,
        });
      }

      this.setState((prevState) => ({
        
        locations: {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        },
      }));
      map.panTo(Location);
    };
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        currentPosition: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    });
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
            position={this.state.currentPosition}
          />
          <Marker position={this.state.locations} />
          {places.map((place, i) => (
            <Marker
              key={i}
              name={place.restaurantName}
              onClick={this.onMarkerClick}
              position={{ lat: place.lat, lng: place.long }}
            />
          ))}

          {this.state.activeMarker && (
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <h6>{this.state.selectedPlace.name}</h6>
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
