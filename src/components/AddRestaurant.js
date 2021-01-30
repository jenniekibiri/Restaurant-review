import React, { Component } from "react";
export class AddRestaurant extends Component {
  ratingChanged = (newRating) => {};

  render() {
    return (
      <>
        <form onSubmit={this.props.handleSubmit} className=" mt-2">
          <div className="form-group ">
            <input
              type="text"
              required
              className="form-control"
              placeholder="Restaurant Name"
              onChange={this.props.handleChange}
              name="name"
              value={this.props.name}
              id="name"
            />
          </div>
          <div className="form-group">
            <select
              className="form-control"
              id="address"
              onChange={this.props.handleChange}
              name="address"
            >
              <option disabled>Select Address</option>
              {this.props.addressLoaded == false ? (
                <option> Address Loading ...</option>
              ) : (
                this.props.addresses.map((a, i) => {
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
              onChange={this.props.handleChange}
              name="newRating"
              value={this.props.newRating}
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
                onClick={this.props.handleClose}
                className=" np-element np-shadow close-btn  text-white  "
              >
                close
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default AddRestaurant;
