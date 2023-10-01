import React, { useEffect, useState } from 'react';
import PersonCreate from './PersonCreate';
import PersonUpdate  from './PersonUpdate';
import PersonDelete from './PersonDelete';
import axios from 'axios';

function PersonRead() {
  const [persons, setPersons] = useState([]);
  const [isOpenEditPerson, setOpenCreatePerson] = useState(false);
  useEffect(() => {
    (async () => getAllPerson())()
  },[]);
  async function getAllPerson() {
    const result = await axios.get('person');
    setPersons(result.data);
  }
  const handleUpdatePerson = () => {
    setOpenCreatePerson(true);
    // console.log("Data: ",isOpenEditPerson);
  }
  return (
    <div>
      <PersonCreate />
      <PersonUpdate
        isOpen = {isOpenEditPerson}
      />
      <PersonDelete />
      <hr></hr>
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
          {
            persons.map(ps =>
              <tr className="w3-center" key={ps.personId}>
                <td>{ps.personId}</td>
                <td>{ps.personName}</td>
                <td>{ps.address}</td>
                <td>{ps.age}</td>
                <td>
                  <button type="button" onClick={() => handleUpdatePerson()} className="w3-button w3-small w3-circle w3-ripple w3-white w3-border w3-border-blue" ><i className="fa fa-edit w3-small"></i></button> | <button type="button" className="w3-button w3-small w3-circle w3-ripple w3-white w3-border w3-border-red"><i className="fa fa-trash w3-small"></i></button>
                </td>
              </tr>
            )
          }
          </tbody>
        </table>
    </div>
  );
}
export default PersonRead;