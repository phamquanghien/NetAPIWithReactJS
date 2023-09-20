import React, { Component } from 'react';

export class Person extends Component {

  constructor(props) {
    super(props);
    this.state = { persons: [], loading: true };
  }

  componentDidMount() {
    this.populatePersonData();
  }

  static renderPersonsTable(persons) {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>PersonID</th>
            <th>PersonName</th>
            <th>Address</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(ps =>
            <tr key={ps.personId}>
              <td>{ps.personId}</td>
              <td>{ps.personName}</td>
              <td>{ps.address}</td>
              <td>{ps.age}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Person.renderPersonsTable(this.state.persons);

    return (
      <div>
        <h1 id="tableLabel">Person List</h1>
        <p>This component demonstrates fetching data from the server.</p>
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