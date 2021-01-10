import React, { Component } from "react";

export class LoadRestaurants extends Component {
  showResataurants = () => {
    fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=100&type=restaurant&key=KEY`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    ).then((response) => {
        console.log(response)
      return response.json();
    })
    .catch((err) => console.log(err));
  };

  render() {
    return <div></div>;
  }
}

export default LoadRestaurants;
