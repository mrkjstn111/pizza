import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default class Homepage extends Component{
    render(){
        return(
<div className="modal fade" id="addItemModal" tabindex="-1" aria-labelledby="addItemModallLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="addItemModalLabel">Add Pizza</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form encType="multipart/form-data">
                <div className="mb-3">
                <label className="form-label" id="itemID" hidden>ID</label>
                <input className="form-control" id="itemID" type="text"  hidden></input>
                </div>

                <div className="mb-3">
                    <label className="form-label" id="itemImage">Preview</label>
                    <input className="form-control" id="itemImage" type="file" accept="image/*"></input>
                </div>
                
                <div className="mb-3">
                    <label className="form-label" id="itemTitle">Pizza</label>
                    <input className="form-control" id="itemTitle" type="text"></input>
                </div>

                <div className="mb-3">
                    <label className="form-label" id="itemDesc">Description</label>
                    <textarea className="form-control" id="itemDesc" rows="3"></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label" id="itemPrice">Price</label>
                    <input className="form-control" id="itemPrice" type="text"></input>
                </div>
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


        )
    }
}

