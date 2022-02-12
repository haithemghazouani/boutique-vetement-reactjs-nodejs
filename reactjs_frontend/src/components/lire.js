import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function Lire() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8700/vetements`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);
    const setData = (data) => {
        let { _id, type,quantite,agent } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('type', type);
        localStorage.setItem('quantite', quantite);
        localStorage.setItem('agent',agent )
    }
    const getData = () => {
        axios.get(`http://localhost:8700/vetements`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:8700/vetements/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Type de Vetement</Table.HeaderCell>
                        <Table.HeaderCell>Quantité</Table.HeaderCell>
                        <Table.HeaderCell>Agent</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell><center>{data.type}</center></Table.Cell>
                                <Table.Cell><center>{data.quantite}</center></Table.Cell>
                                <Table.Cell><center>{data.agent}</center></Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <center>
                                            <Button onClick={() => setData(data)}>Update</Button>
                                        </center>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                <center><Button onClick={() => onDelete(data._id)}>Delete</Button></center>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
