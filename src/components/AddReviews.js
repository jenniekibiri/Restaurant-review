import React, { Component } from 'react'
import '../css/style.css'
export class AddReviews extends Component {
//   constructor(props){
//     super(props)
//     //state
//     this.state={
//       name:'',
//       email:'',
//       comment:''
//     }
//     // ?why bind this
//     this.handleChange=this.handleChange.bind(this)
//     this.handleSubmit=this.handleSubmit.bind(this)
//   }
//   //handle change
//   handleChange(e){
//     this.setState({
//       //handle events for all fields
//       [e.target.name]:e.target.value
//     })
//   }
//   //handle submit
// handleSubmit(e){
//   e.preventDefault();
//     const { name, email,comment } = this.state;
//   localStorage.setItem('name', name);
//   localStorage.setItem('email', email);
//     localStorage.setItem('comment', comment );
//   console.log('submit')

// }
    render() {
        return (
            <div>
                  <span  type="button" onClick={this.props.getRestaurantId} id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="add-reviews np-colorize np-element " >Add review</span>
                   <div className="dropdown-menu card-body  np-shadow-inverse  mr-3" style={{width: "16rem",
                       position: 'absolute',
                        height: '290px',
                        overflow:'scroll'
         

          }} aria-labelledby="dropdownMenuButton1">
 
     <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
           
            <input 
             onChange={this.props.handleChange}
             value={this.props.name}
            type="text" className="form-control" name="name" placeholder="full name" id="recipient-name"/>
          </div>
           <div className="form-group ">
            
            <input  onChange={this.props.handleChange}
            value={this.props.email}
            type="text" className="form-control" name="email" placeholder="email" id="recipient-name"/>
          </div>
          <div className="form-group">
            
            <textarea 
             onChange={this.props.handleChange}
             value={this.props.comment}
            className="form-control" name="comment" id="message-text"></textarea>
          </div>
            <div className="form-group">

        <button type="submit"  className=" ml-5 np-colorize  np-element np-shadow send-btn  text-white ">Send review</button>
      </div>
        </form>
      </div>
   
  </div>
 
            </div>
        )
    }
}

export default AddReviews
