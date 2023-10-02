import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'reactstrap';
import PersonCreate from './PersonCreate';
import PersonDelete from './PersonDelete';
import PersonUpdate from './PersonUpdate';
function PersonRead() {
    const [persons, setPersons] = useState([]);
    const [person, setPerson] = useState({});
    const [showPersonCreate, setShowPersonCreate] = useState(false);
    const [showPersonDelete, setShowPersonDelete] = useState(false);
    const [showPersonUpdate, setShowPersonUpdate] = useState(false);
    useEffect(() => {
        (async() => getAllPerson())()
    },[]);
    async function getAllPerson() {
        const result = await axios.get('api/person');
        setPersons(result.data);
    }
    const handlePersonDelete = (ps) => {
        setShowPersonDelete(true);
        setPerson(ps);
    }
    const handlePersonUpdate = (ps) => {
        setShowPersonUpdate(true);
        setPerson(ps);
    }
    return(
        <div>
            <div>
                <h2>Person list
                    <Button className="w3-right" color="primary" outline onClick={() => setShowPersonCreate(true)}><i className="fa fa-plus"></i> Add new</Button>
                    <PersonCreate isOpen={showPersonCreate} close={() => setShowPersonCreate(false)} refreshData = {() => getAllPerson()}/>
                    {
                        showPersonDelete &&
                        <PersonDelete isOpen={showPersonDelete} close={() => setShowPersonDelete(false)} refreshData = {() => getAllPerson()} getData={person}/>
                    }
                    {
                        showPersonUpdate &&
                        <PersonUpdate isOpen={showPersonUpdate} close={() => setShowPersonUpdate(false)} refreshData = {() => getAllPerson()} getData={person}/>
                    }
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
                                <button type="button" className="w3-button w3-small w3-circle w3-ripple w3-white w3-border w3-border-blue" onClick={() => handlePersonUpdate(ps)}><i className="fa fa-edit w3-small"></i></button> | <button type="button" className="w3-button w3-small w3-circle w3-ripple w3-white w3-border w3-border-red" onClick={() => handlePersonDelete(ps)}><i className="fa fa-trash w3-small"></i></button>
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