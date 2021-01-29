import React, { Component } from "react";
import "../css/style.css";
import uuid from "react-uuid";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import places from "../places.json";
require("dotenv").config();

const mapStyles = {
  height: "87%",
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
      lat: "",
      lng: "",
      name: "",
      address: "",
      addresses: [],
      addressLoaded: false,
      newRating: 0,
      dataLoaded: false,
      showMarker: false,
      rating: 0,
      showForm: false,
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose = () => {
    this.setState({
      showForm: false,
    });
  };
  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onMarkerDragEnd = (e, marker) => {
    console.log(marker);
    console.log(e);
    var position = marker.getPosition();

    var lat = position.lat();
    var lng = position.lng();
    let draggedPosition = {
      lat,
      lng,
    };
    console.log(draggedPosition);
    this.props.getCurrentPosition(draggedPosition);
  };
  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });

  onMapDragEnd = (map, e, marker) => {
    console.log(e);
  };

  onMapClicked = (props, map, e) => {
    this.setState({
      showForm: true,
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
    let lat = e.latLng.lat();
    let lng = e.latLng.lng();

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(
      proxyurl +
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GoogleMapsApiKey}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          addressLoaded: true,
          addresses: data.results,
          address: data.results[0].formatted_address,
        });
      });

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

  handleSubmit = (e) => {
    const { newRating, name, address, newRestaurants, lat, lng } = this.state;
    e.preventDefault();
    newRestaurants.push(newRating, name, address);
    this.props.places.push({
      lat,
      long: lng,
      rating: newRating,
      restaurantName: name,
      address,
      photo: "https://source.unsplash.com/400x400/?hotel,restaurant",
      ratings: [],
      id: uuid(),
    });
    this.props.handlePlaces(this.props.places);

    this.setState({
      showForm: false,
      showMarker: true,
      newRating: 1,
      name: "",
      address: "",
    });
  };

  render() {
    return (
      <div
        style={{ height: "100%", width: "100%" }}
        className="card-img p-2  mt-5"
      >
        <Map
          google={this.props.google}
          onDragend={this.onMapDragEnd}
          style={mapStyles}
          zoom={13}
          draggable={true}
          initialCenter={this.props.currentPosition}
          onClick={this.onMapClicked}
        >
          <Marker
            name={"current location"}
            title={"current location"}
            draggable={true}
            onDragend={this.onMarkerDragEnd}
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

          {this.state.showForm === true ? (
            <div style={{ position: "relative" }} className="col-md-4 ml-5 np-element ">
              

              <form onSubmit={this.handleSubmit} className=" mt-2">
                 <div className="form-group ">
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Restaurant Name"
                    onChange={this.handleChange}
                    name="name"
                    value={this.state.name}
                    id="name"
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    id="address"
                    onChange={this.handleChange}
                    name="address"
                  >
                    <option disabled>Select Address</option>
                    {this.state.addressLoaded == false ? (
                      <option> Address Loading ...</option>
                    ) : (
                      this.state.addresses.map((a, i) => {
                        return (
                          <option key={i} value={a.formatted_address}>
                            {" "}
                            {a.formatted_address}
                          </option>
                        );
                      })
                    )}
                  </select>
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    min="1"
                    max="5"
                    required
                    className="form-control"
                    placeholder="rating"
                    onChange={this.handleChange}
                    name="newRating"
                    value={this.state.newRating}
                    id="newRating"
                  />
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <button type="submit" className="np-element send-btn np-shadow">
                      Submit
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button
                      type="submit"
                      onClick={this.handleClose}
                      className=" np-element np-shadow close-btn  text-white  "
                    >
                      close
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            ""
          )}

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
                <div></div>

                <img
                  src={this.state.selectedPlace.photo}
                  className="  img-fluid  "
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
