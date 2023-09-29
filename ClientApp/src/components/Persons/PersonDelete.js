import React, { Component } from 'react';

export class PersonDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personId: "PS001",
            personName: "Nguyen Van A",
            address: "Ha Noi",
            age: 18
          };
    }
    render() { 
        return ( 
            <div>
                <div class="modal" id="deletePerson">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form>
                                <div class="modal-header">
                                    <h4 class="modal-title">Delete Person</h4>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body">
                                    <label>PersonID: {this.state.personId}</label> <br></br>
                                    <label>PersonName: {this.state.personName}</label> <br></br>
                                    <label>Address: {this.state.address}</label> <br></br>
                                    <label>Age: {this.state.age}</label> <br></br>
                                    
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    <button type="button" onClick={this.onSubmit} class="btn btn-success">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}