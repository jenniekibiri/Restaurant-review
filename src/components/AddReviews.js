import React, { Component } from 'react'
import '../css/style.css'
export class AddReviews extends Component {
    render() {
        return (
            <div>
                  <span  type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="add-reviews np-colorize np-element " >Add review</span>
                   <div class="dropdown-menu card-body  np-shadow-inverse  mr-3" style={{width: "16rem",
                       position: 'absolute',
                        height: '290px',
                        overflow:'scroll'
          

        

          }} aria-labelledby="dropdownMenuButton1">
 
     <div class=" ">
        <form >
          <div class="form-group">
           
            <input type="text" class="form-control " placeholder="full name" id="recipient-name"/>
          </div>
           <div class="form-group ">
            
            <input type="text" class="form-control" placeholder="email" id="recipient-name"/>
          </div>
          <div class="form-group">
            
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
            <div class="">

        <button type="button" class=" ml-5 np-colorize  np-element np-shadow send-btn  text-white ">Send review</button>
      </div>
      </div>
   
  </div>

            </div>
        )
    }
}

export default AddReviews
