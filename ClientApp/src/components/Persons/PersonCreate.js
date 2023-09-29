import React, { Component } from 'react';

export class PersonCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personId: "PS01",
            personName: "Nguyen Van A",
            address: "Ha Noi",
            age: 18,
            errorMessage:""
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }
    onSubmitForm(event) {
        this.createNewPerson();
        //alert('Data submitted: ' + this.state.personId + "-" + this.state.personName + "-" + this.state.address + "-" + this.state.age);
        event.preventDefault();
    }
    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() { 
        return ( 
            <div>
                <div>
                    <h3 id="tableLabel" className="w3-left">Person List</h3>
                    <button type="button" className="btn w3-green w3-right w3-card-4" data-bs-toggle="modal" data-bs-target="#createPerson">
                        <i class="fa fa-plus w3-round-large"></i> Add
                    </button>
                    <br></br>
                </div>
                <div class="modal" id="createPerson">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <form onSubmit={this.handleSubmit}>
                                <div class="modal-header">
                                    <h4 class="modal-title">Create a new Person</h4>
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
                                    <button type="submit" onClick={this.onSubmitForm} class="btn btn-success">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
    createNewPerson() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                personId: this.state.personId,
                personName: this.state.personName,
                address: this.state.address,
                age: this.state.age
            })
        };
        fetch('person', requestOptions)
            .then(response => response.json(
                this.setState({
                    errorMessage:"Message: " + response
                })
            ))
            .then(data => this.setState({
                personId: "",
                personName: "",
                address: "",
                age: 0,
                errorMessage:"Create person successfully"
            }))
            .catch(error => {
                this.setState({
                    errorMessage: error
                });
            });
            alert(this.state.errorMessage)
    }
}