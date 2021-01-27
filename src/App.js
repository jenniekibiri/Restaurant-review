import React, { Component } from "react";
import { Element } from "react-scroll";
import ReactStars from "react-rating-stars-component";
import MapContainer from "./components/MapContainer";
import Navbar from "./components/Navbar";
import "./css/style.css";
import places from "./places.json";
import GoogleApiCard from "./components/GoogleApiCard";
import CustomData from "./components/CustomData";
import Filter from "./components/Filter";
require("dotenv").config();
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      place: [],
      ratings: [],
      author_name: "",
      loaded: false,
      currentPosition: {},
      isLoaded: false,
      dataLoaded: false,
      rating: 1,
      text: "",
      restaurantId: 0,
      minRating: 1,
      ratingClicked: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRestaurantId = this.getRestaurantId.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
    this.handlePlaces = this.handlePlaces.bind(this);
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }
  clearFilter(e) {
    this.setState({
      ratingClicked: false,
      minRating: "",
    });
  }
  ratingChanged = (newRating) => {
    this.setState({
      minRating: newRating,
      ratingClicked: true,
    });
  };

  handlePlaces(places) {
    this.setState({
      places,
    });
  }
 getCurrentPosition(currentPosition) {
    console.log(currentPosition);
     fetch(
      proxyurl +
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currentPosition.lat},${currentPosition.lng}&radius=1000&type=restaurant&key=${process.env.REACT_APP_GoogleMapsApiKey}`,

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
        let results = data.results;
        this.state.ratings=[]
        //console.log(data)

        results.map((result) => {
          let placeid = result.place_id;
          
//console.log(placeid);
          fetch(
            proxyurl + `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeid}&fields=name,rating,photo,vicinity,place_id,reviews,formatted_phone_number&key=${process.env.REACT_APP_GoogleMapsApiKey}`,
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
              console.log(data)
              let { ratings } = this.state;
              ratings.push(data.result);
              this.setState({
                ratings,
                dataLoaded: true,
              });
            });
        })
        
        this.setState({
          isLoaded: true,
          place: data.results,
        });
      })
      .catch((err) => console.log(err));

    this.setState({
      currentPosition,
    });
  }
  //handle change
  handleChange(e) {
    this.setState({
      //handle events for all fields
      [e.target.name]: e.target.value,
    });
  }

  //handle submit
  handleSubmit = (e) => {
    const {
      author_name,
      text,
      rating,
      places,
      restaurantId,
      ratings,
    } = this.state;

    //add new reviews to hardcoded restaurants
    places.map((place) => {
      console.log(place.id);

      if (restaurantId == place.id) {
        place.ratings.push({ author_name, rating, text });
      }
      return false;
    });

    //add new reviews to google api restaurants
    ratings.map((r) => {
      if (restaurantId == r.place_id) {
        if (r.reviews !== undefined) {
          r.reviews.push({ author_name, rating, text });
        } else {
          r.reviews = [
            {
              author_name,
              rating,
              text,
            },
          ];
        }
      }
      return false;
    });

    this.setState({
      author_name: "",
      text: "",
      rating: 0,
    });
    e.preventDefault();
  };

  //get restaurant id on click
  getRestaurantId(e) {
    let id = e.target.id;
    console.log("clicked id:" + id);
    this.setState((state) => ({
      restaurantId: id,
    }));
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        currentPosition: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        loaded: true,
      });
      if (this.state.loaded === false) {
      } else {
        fetch(
          proxyurl +
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.currentPosition.lat},${this.state.currentPosition.lng}&radius=1000&type=restaurant&key=${process.env.REACT_APP_GoogleMapsApiKey}`,

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
            let results = data.results;

            results.map((result) => {
              let placeid = result.place_id;

              fetch(
                proxyurl +
                  `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeid}&fields=name,rating,photo,vicinity,place_id,reviews,formatted_phone_number&key=${process.env.REACT_APP_GoogleMapsApiKey}`,
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
                  const { ratings } = this.state;
                  ratings.push(data.result);
                  this.setState({
                    ratings,
                    dataLoaded: true,
                  });
                });
            });
          this.setState({
              isLoaded: true,
              place: data.results,
            });
          })
          .catch((err) => console.log(err));
      }
    });

    this.setState({
      places: places,
    });
  }

  render() {
    const {
      isLoaded,
      place,
      places,
      minRating,
      ratings,
      ratingClicked,
    } = this.state;

    const filteredCoded = [];
    let filterGRestaurants = [];

    if (isLoaded === true) {
      if (ratingClicked == false) {
        filterGRestaurants = ratings;
      }

      ratings.forEach((rating) => {
        if (rating.rating == minRating) {
          return filterGRestaurants.push(rating);
        }
      });
    }

    places.forEach((p) => {
      if (ratingClicked === false) {
        filteredCoded.push(p);
      }

      if (p.rating == minRating) {
        filteredCoded.push(p);
      }
    });

    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-md-8 pr-3 map mt-4 pl-3 np-element ">
            <MapContainer
              currentPosition={this.state.currentPosition}
              googleRestaurants={this.state.place}
              places={this.state.places}
              handlePlaces={this.handlePlaces}
              getCurrentPosition={this.getCurrentPosition}
            />
          </div>

          <div className="col-md-4  col-lg-4  cards  np-element ">
           <div className="row  "> 
            <Filter
                ratingClicked={ratingClicked}
                ratingChanged={this.ratingChanged}
                clearFilter={this.clearFilter}
              />
           </div>
            <div className="row mt-5 ">
              {/* card */}



              
              <Element
                name="test7"
                id="containerElement"
                className="col"
                style={{
                  position: "relative",
                  height: "650px",
                  width: "400px",
                  overflow: "scroll",
                  marginBottom: "0px",
                }}
              >
                {filteredCoded.map((place,i) => (
                  <CustomData
                 
                    place={place}
                    name={this.state.author_name}
                    rating={this.state.rating}
                    text={this.state.text}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    getRestaurantId={this.getRestaurantId}
                  />
                ))}

                {!isLoaded ? (
                  <div className="Jumbotron text-center">
                    <h2 className="spinner">loading ...</h2>
                  </div>
                ) : (
                  filterGRestaurants.map((p) => {
                    let photoRef = p.photos;
                    var photoLink;
                    if (photoRef !== undefined) {
                      photoLink = p.photos[0].photo_reference;
                    } else {
                      photoLink =
                        "ATtYBwLuLqFtlr_5cBGOaYY76Orfd4fMt5F1if660Ds2dBE3Hxn8ZacI2jhI6V217ZMdf7O5NRcGPi99mGHGbju8dtGsFEvNTIMYP3Ky6Fz9XVQe_advoC68tEDGVuKG1dLs-YgS6H6N9SI4qMgUW3kqZVB-CIdY5kfPrj0IvQHEf5U3IT-C";
                    }

                    return (
                      <GoogleApiCard
                        p={p}
                        place={place}
                        name={this.state.author_name}
                        rating={this.state.rating}
                        photoLink={photoLink}
                        text={this.state.text}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        getRestaurantId={this.getRestaurantId}
                      />
                    );
                  })
                )}
              </Element>

              {/* end of card */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
