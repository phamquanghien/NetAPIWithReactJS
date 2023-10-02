import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'reactstrap';
function PersonRead() {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        (async() => getAllPerson())()
    },[]);
    async function getAllPerson() {
        const result = await axios.get('api/person');
        setPersons(result.data);
    }
    const handleCreatePerson = () => {
        alert('Create person');
    }
    const handleUpdatePerson = (ps) => {
        alert('Update person');
    }
    const handleDeletePerson = (ps) => {
        alert('Delete person');
    }
    return(
        <div>
            <div>
                <h2>Person list
                    <Button className='w3-right' onClick={() => handleCreatePerson()} color='danger'><i className='fa fa-plus'> Add new</i></Button>
                </h2>
                <hr></hr>
            </div>
            <Table hover responsive striped>
                <thead>
                    <tr className="w3-center w3-blue">
                        <th>PersonID</th>
                        <th>FullName</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        persons.map(ps => 
                            <tr className='w3-center' key={ps.personID}>
                                <td>{ps.personID}</td>
                                <td>{ps.fullName}</td>
                                <td>
                                <button type="button" className="w3-button w3-small w3-circle w3-ripple w3-white w3-border w3-border-blue" onClick={() => handleUpdatePerson(ps)}><i className="fa fa-edit w3-small"></i></button> | <button type="button" className="w3-button w3-small w3-circle w3-ripple w3-white w3-border w3-border-red" onClick={() => handleDeletePerson(ps)}><i className="fa fa-trash w3-small"></i></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}
export default PersonRead;