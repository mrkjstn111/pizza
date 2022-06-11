import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default class Homepage extends Component{
    render(){
        return(
          <div className="table-responsive">
          <table className="table" id="tblPizza" name="tblPizza">
            <thead>
              <tr>
                <th>Item#</th>
                <th>Preview</th>
                <th>Pizza Name</th>
                <th>Pizza Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
        )
    }
}




