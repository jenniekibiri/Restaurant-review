import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import Form from "./Form";
import { Element } from "react-scroll";
import Avatar from "react-avatar";
export class GoogleApiCard extends Component {
  render() {
    const {
      p,
      place,
      photoLink,
      getRestaurantId,
      author_name,
      text,
      rating,
      handleChange,
      handleSubmit,
    } = this.props;
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
                rating={p.rating}
                starDimension="20px"
                starSpacing="1px"
                name="rating"
              />
              <span className="mb-4 ml-2" style={{ fontSize: "15px" }}>
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
                          <p className="spinner">No reviews yet</p>
                        </div>
                      ) : (
                        p.reviews.map((review, i) => (
                          <div key={i}>
                            <div key={p.place_id}>
                              <div className="row">
                                <div className="pl-3">
                                  <Avatar
                                    color={Avatar.getRandomColor([
                                      "red",
                                      "green",
                                    ])}
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
                    onClick={getRestaurantId}
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
                      name={author_name}
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
    );
  }
}

export default GoogleApiCard;
