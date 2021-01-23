import React, { Component } from 'react'
import ReactStars from "react-rating-stars-component";
export class Filter extends Component {
    render() {
        const{ratingClicked,clearFilter,ratingChanged} = this.props
        return (
             <div className="buttonStuff ml-3 d-flex justify-content-end align-items-center ">
                {ratingClicked === true ? (
                  <span
                    className="material-icons filter"
                    onClick={clearFilter}
                  >
                    cached
                  </span>
                ) : (
                  <p className="mb-0 mr-1">Filter</p>
                )}

                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  isHalf={true}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>
        )
    }
}

export default Filter
