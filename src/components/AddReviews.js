import React, { Component } from 'react'

export class AddReviews extends Component {
    render() {
        return (
            <div>
                  <span  type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className=" np-element ">add review</span>

                   <div class="dropdown-menu card-body np-shadow-inverse " style={{width: "18rem"}} aria-labelledby="dropdownMenuButton1">
 
     <div class="  np-element">
        <form>
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
      </div>
      <div class="modal-footer ">
        <button type="button" class="btn np-element text-white" data-dismiss="modal ">Close</button>
        <button type="button" class="btn np-element text-white ">Send review</button>
      </div>
  </div>

            </div>
        )
    }
}

export default AddReviews
