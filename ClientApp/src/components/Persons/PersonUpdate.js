import React, { Component } from 'react';

export class PersonUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personId: "",
            personName: "",
            address: "",
            age: null
          };
    }
    render() { 
        return ( 
            <div>
                <div class="modal" id="updatePerson">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form>
                                <div class="modal-header">
                                    <h4 class="modal-title">Update Person</h4>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body">
                                    <input name='personId' value={this.state.personId} onChange={this.onInputchange} type='text' className='form-control' placeholder='Enter PersonID'></input><br></br>
                                    <input name='personName' value={this.state.personName} onChange={this.onInputchange} type='text' className='form-control' placeholder='Enter Person Name'></input><br></br>
                                    <input name='address' value={this.state.address} onChange={this.onInputchange} type='text' className='form-control' placeholder='Enter Address'></input><br></br>
                                    <input name='age' value={this.state.age} onChange={this.onInputchange} type='number' className='form-control' placeholder='Enter Age'></input><br></br>
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