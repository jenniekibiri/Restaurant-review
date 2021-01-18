import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <input
              onChange={this.props.handleChange}
              value={this.props.author_name}
              type="text"
              className="form-control"
              name="author_name"
              placeholder="full name"
              id="recipient-name"
            />
          </div>
          
          <div className="form-group">
            <input
              onChange={this.props.handleChange}
              value={this.props.rating}
              type="number"
              className="form-control"
              name="rating"
              placeholder="rating"
              id="recipient-name"
              min="1"
              max="5"
            />
          </div>

          <div className="form-group">
            <textarea
              onChange={this.props.handleChange}
              value={this.props.text}
              className="form-control"
              name="text"
              id="message-text"
            ></textarea>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className=" ml-5 np-colorize  np-element np-shadow send-btn  text-white "
            >
              Send review
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
