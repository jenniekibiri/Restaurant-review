import React, { Component } from "react";
import { Element } from "react-scroll";
import sortBy from "lodash/sortBy";
import ReactStars from "react-rating-stars-component";
import Form from "./components/Form";
import Ratings from "./components/Ratings";
import MapContainer from "./components/MapContainer";
import Navbar from "./components/Navbar";
import StarRatings from "react-star-ratings";
import Avatar from "react-avatar";
import "./css/style.css";
import places from "./places.json";
require("dotenv").config();
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
  }

  ratingChanged = (newRating) => {
    this.setState({
      minRating: newRating,
      ratingClicked: true,
    });
  };
  

  handlePlaces(places){
this.setState({
  places
})
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
      if (restaurantId === place.id) {
        return place.ratings.push({ author_name, rating, text });
      }
      return false;
    });

    //add new reviews to google api restaurants
    ratings.map((r) => {
      if (restaurantId === r.place_id) {
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
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.currentPosition.lat},${this.state.currentPosition.lng}&radius=500&type=restaurant&key=${process.env.REACT_APP_GoogleMapsApiKey}`,

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

    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
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
    const filterGRestaurants = [];

    places.forEach((p) => {
      if (ratingClicked === false) {
         filteredCoded.push(p);

      }

      if (p.rating == minRating) {
        filteredCoded.push(p);
      }
    });

    
    if (isLoaded == true) {
      ratings.forEach((rating) => {
        
        if (rating.rating == minRating) {
           return filterGRestaurants.push(rating);
        }
      });
    }
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="col-md-8 pr-3 mt-4 pl-4 np-element ">
            <MapContainer
              currentPosition={this.state.currentPosition}
              googleRestaurants={this.state.place}
              places={this.state.places}
              handlePlaces={this.handlePlaces}
            />
          </div>

          <div className="col-md-4 mt-4   np-element ">
            <div className="row mt-5">
              {/* card */}

              <Element
                name="test7"
                className="element"
                id="containerElement"
                style={{
                  position: "relative",
                  height: "650px",
                  overflow: "scroll",
                  marginBottom: "0px",
                }}
              >
                <div className="buttonStuff d-flex justify-content-end align-items-center ">
                  <p className="mb-0 mr-1">Filter</p>
                  <ReactStars
                    count={5}
                    onChange={this.ratingChanged}
                    isHalf={true}

                    size={24}
                    activeColor="#ffd700"
                  />
                </div>
                {
                filteredCoded.map((place) => (
                  <div
                    className=" mb-3 np-element np-shadow-double"
                    id={place.id}
                    key={place.id}
                    style={{ width: "25rem" }}
                  >
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img
                          src={place.photo}
                          className=" np-img-wrapper card-img np-img-expand"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 ref="restaurantName">{place.restaurantName}</h5>
                          <div className=" row ml-2  text-warning "></div>
                          <StarRatings
                            starRatedColor="yellow"
                            rating={Number(place.rating)}
                            starDimension="20px"
                            starSpacing="1px"
                            name="rating"
                          />
                          <span
                            className="mb-4 ml-2"
                            style={{ fontSize: "15px" }}
                          >
                            {place.address}{" "}
                          </span>

                          <div className="row mt-3">
                            <div className="dropdown">
                              <i
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                className="material-icons np-colorize np-element mr-2 reviews"
                              >
                                expand_more
                              </i>
                              <div
                                className="dropdown-menu  card-body np-shadow-inverse  "
                                style={{ width: "16rem" }}
                                aria-labelledby="dropdownMenuButton"
                              >
                                <Element
                                  name="test7"
                                  className="element"
                                  id="containerElement"
                                  style={{
                                    position: "relative",
                                    height: "250px",
                                    overflow: "scroll",
                                    marginBottom: "0px",
                                  }}
                                >
                                  {/* // check condtion id */}

                                  <div>
                                    <Ratings place={place} />
                                  </div>
                                </Element>
                              </div>
                            </div>
                            <div>
                              <span
                                type="button"
                                onClick={this.getRestaurantId}
                                id={place.id}
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                className="add-reviews np-colorize np-element "
                              >
                                Add review
                              </span>
                              <div
                                className="dropdown-menu card-body  np-shadow-inverse  mr-3"
                                style={{
                                  width: "16rem",
                                  position: "absolute",
                                  height: "290px",
                                  overflow: "scroll",
                                }}
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <Form
                                  author_name={this.state.author_name}
                                  rating={this.state.rating}
                                  text={this.state.text}
                                  handleChange={this.handleChange}
                                  handleSubmit={this.handleSubmit}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {!isLoaded ? (
                  <div className="Jumbotron text-center">
                    <h2 className="spinner">loading ...</h2>
                  </div>
                ) : (
                 filterGRestaurants
                  .map((p) => {
                    let photoRef = p.photos;
                    var photoLink;
                    if (photoRef !== undefined) {
                      photoLink = p.photos[0].photo_reference;
                    } else {
                      photoLink =
                        "ATtYBwLuLqFtlr_5cBGOaYY76Orfd4fMt5F1if660Ds2dBE3Hxn8ZacI2jhI6V217ZMdf7O5NRcGPi99mGHGbju8dtGsFEvNTIMYP3Ky6Fz9XVQe_advoC68tEDGVuKG1dLs-YgS6H6N9SI4qMgUW3kqZVB-CIdY5kfPrj0IvQHEf5U3IT-C";
                    }

                    return (
                      <div
                        className=" mb-3 np-element np-shadow-double"
                        id={place.id}
                        key={p.place_id}
                        style={{ width: "25rem" }}
                      >
                        <div className="row no-gutters">
                          <div className="col-md-4">
                            <img
                              src={`${`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoLink}&key=${process.env.REACT_APP_GoogleMapsApiKey}`}`}
                              className=" np-img-wrapper card-img np-img-expand"
                              alt="..."
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 ref="restaurantName">{p.name}</h5>
                              <div className=" row ml-2  text-warning "></div>
                              <StarRatings
                                starRatedColor="yellow"
                                rating={Number(p.rating)}
                                starDimension="20px"
                                starSpacing="1px"
                                name="rating"
                              />
                              <span
                                className="mb-4 ml-2"
                                style={{ fontSize: "15px" }}
                              >
                                {p.vicinity}{" "}
                              </span>

                              <div className="row mt-3">
                                <div className="dropdown">
                                  <i
                                    type="button"
                                    id={p.place_id}
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    className="material-icons np-colorize np-element mr-2 reviews"
                                  >
                                    expand_more
                                  </i>

                                  <div
                                    className="dropdown-menu  card-body np-shadow-inverse  "
                                    style={{ width: "16rem" }}
                                    aria-labelledby="dropdownMenuButton"
                                  >
                                    <Element
                                      name="test7"
                                      className="element"
                                      id="containerElement"
                                      style={{
                                        position: "relative",
                                        height: "250px",
                                        overflow: "scroll",
                                        marginBottom: "0px",
                                      }}
                                    >
                                      {/* // check condtion id */}
                                      {p.reviews === undefined ? (
                                        <div className="Jumbotron text-center">
                                          <p className="spinner">
                                            No reviews yet
                                          </p>
                                        </div>
                                      ) : (
                                        p.reviews.map((review, i) => (
                                          <div key={i}>
                                            <div key={p.place_id}>
                                              <div className="row">
                                                <div className="pl-3">
                                                  <Avatar
                                                    color={Avatar.getRandomColor(
                                                      ["red", "green"]
                                                    )}
                                                    name={review.author_name}
                                                    size="40"
                                                    round="50px"
                                                  />

                                                  <span
                                                    className="font-weight-lighter ml-2"
                                                    style={{
                                                      fontSize: "15px",
                                                    }}
                                                  >
                                                    {review.author_name}
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="text-warning">
                                                <StarRatings
                                                  starRatedColor="yellow"
                                                  rating={Number(review.rating)}
                                                  starDimension="20px"
                                                  starSpacing="1px"
                                                  name="rating"
                                                />
                                              </div>

                                              <p
                                                style={{ fontSize: "15px" }}
                                                className="text-muted"
                                                id={p.place_id}
                                              >
                                                {review.text}
                                              </p>
                                            </div>
                                          </div>
                                        ))
                                      )}
                                    </Element>
                                  </div>
                                </div>
                                <div>
                                  <span
                                    type="button"
                                    onClick={this.getRestaurantId}
                                    id={p.place_id}
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    className="add-reviews np-colorize np-element "
                                  >
                                    Add review
                                  </span>
                                  <div
                                    className="dropdown-menu card-body  np-shadow-inverse  mr-3"
                                    style={{
                                      width: "16rem",
                                      position: "absolute",
                                      height: "290px",
                                      overflow: "scroll",
                                    }}
                                    aria-labelledby="dropdownMenuButton1"
                                  >
                                    <Form
                                      name={this.state.author_name}
                                      rating={this.state.rating}
                                      text={this.state.text}
                                      handleChange={this.handleChange}
                                      handleSubmit={this.handleSubmit}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
