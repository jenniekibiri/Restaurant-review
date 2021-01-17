import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import Avatar from "react-avatar";
export class Ratings extends Component {
  render() {
    return (
      <div>
        {this.props.place.ratings.map((rating, i) => (
          <div key={i}>
            <div className="row">
              <div className="pl-3">
                <Avatar
                  color={Avatar.getRandomColor(["red", "green"])}
                  name={rating.author_name}
                  size="40"
                  round="50px"
                />
                <span
                  className="font-weight-lighter ml-2"
                  style={{ fontSize: "15px" }}
                >
                  {rating.author_name}
                </span>
              </div>
            </div>
            <div className="text-warning">
              <StarRatings
                starRatedColor="yellow"
                rating={Number(rating.stars)}
                starDimension="20px"
                starSpacing="1px"
                name="rating"
              />
            </div>

            <p
              style={{ fontSize: "15px" }}
              className="text-muted"
              id={this.props.place.id}
            >
              {rating.text}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Ratings;
