import React, { Component } from 'react';
import { PersonCreate } from './PersonCreate';
import { PersonUpdate } from './PersonUpdate';
import { PersonDelete } from './PersonDelete';

export class PersonRead extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [], 
      loading: true 
    };
  }
  componentDidMount() {
    this.populatePersonData();
  }

  static renderPersonsTable(persons) {
    return (
      <div>
        <table className="table table-striped" aria-labelledby="tableLabel">
          <thead>
            <tr className="w3-center">
              <th>PersonID</th>
              <th>PersonName</th>
              <th>Address</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {persons.map(ps =>
              <tr className="w3-center" key={ps.personId}>
                <td>{ps.personId}</td>
                <td>{ps.personName}</td>
                <td>{ps.address}</td>
                <td>{ps.age}</td>
                <td>
                  <button type="button" class="w3-button w3-small w3-circle w3-ripple w3-white w3-border w3-border-blue" data-bs-toggle="modal" data-bs-target="#updatePerson"><i class="fa fa-edit w3-small"></i></button> | <button type="button" class="w3-button w3-small w3-circle w3-ripple w3-white w3-border w3-border-red" data-bs-toggle="modal" data-bs-target="#deletePerson"><i class="fa fa-trash w3-small"></i></button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
    );
  }
  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : PersonRead.renderPersonsTable(this.state.persons);

    return (
      <div>
        <div>
          <PersonCreate></PersonCreate>
          <PersonUpdate></PersonUpdate>
          <PersonDelete></PersonDelete>
          <hr></hr>
        </div>
        {contents}
      </div>
    );
  }

  async populatePersonData() {
    const response = await fetch('person');
    const data = await response.json();
    this.setState({ persons: data, loading: false });
  }
}