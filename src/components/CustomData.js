import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import Form from "./Form";
import { Element } from "react-scroll";
import Ratings from "./Ratings";
export class CustomData extends Component {
  render() {
    const {
      place,
      getRestaurantId,
      author_name,
      text,
      rating,
      handleChange,
      handleSubmit,
    } = this.props;
    return (
      <div>
        <div
          className=" mb-3 np-element np-shadow-double"
          id={place.id}
          key={place.id}
          style={{ width: "23rem" }}
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
                <p className="mb-4 ml-2" style={{ fontSize: "15px" }}>
                  {place.address}{" "}
                </p>

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
                        <div>
                          <Ratings place={place} />
                        </div>
                      </Element>
                    </div>
                  </div>
                  <div>
                    <span
                      type="button"
                      onClick={getRestaurantId}
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
                        author_name={author_name}
                        rating={rating}
                        text={text}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomData;
