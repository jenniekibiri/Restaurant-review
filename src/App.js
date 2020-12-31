import React, { Component } from "react";
import { Element } from "react-scroll";
import Form from "./components/Form";
import Ratings from "./components/Ratings";
import MapContainer from "./components/MapContainer";
import Navbar from "./components/Navbar";
import "./css/style.css";
import places from "./places.json";

require("dotenv").config();

export class App extends Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      places: [], //json data
      name: "", //user data
      email: "",
      stars: 0,
      comment: "",
      restaurantId: 0,
    };
    // ?why bind this

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRestaurantId = this.getRestaurantId.bind(this);
   
  }
  //onclick

  //handle change
  handleChange(e) {
    this.setState({
      //handle events for all fields
      [e.target.name]: e.target.value,
    });
  }
  //handle submit
  handleSubmit(e) {
    e.preventDefault();
    const { name, comment, stars, places, restaurantId } = this.state;
    places.map((place) => {
      if (restaurantId == place.id) {
        place.ratings.push({ name, stars, comment });
      }
    });

    this.setState({
      places: places,
      name: "",
      email: "",
      comment: "",
      stars: 0,
    });
  }

  getRestaurantId(e) {
    let id = e.target.id;
    this.setState((state) => ({
      restaurantId: id,
    }));
  }
  
  componentDidMount() {
    this.setState({
      places: places,
    });
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="row">
          <div className="col-md-8 pr-3 mt-4 pl-4 np-element ">
            <MapContainer />
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
                {this.state.places.map((place) => (
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
                                  name={this.state.name}
                                  email={this.state.name}
                                  stars={this.state.stars}
                                  comment={this.state.comment}
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
