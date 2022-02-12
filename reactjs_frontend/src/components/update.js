import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Update() {
    const navigate = useNavigate();
    const [id, setID] = useState(null);
    const [type, setType] = useState('');
    const [quantite, setQuantite] = useState('');
    const [agent, setAgent] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setType(localStorage.getItem('type'));
        setQuantite(localStorage.getItem('quantite'));
        setAgent(localStorage.getItem('agent'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:8700/vetements/${id}`, {
            type,
            quantite,
            agent
        }).then(() => {
            navigate('/read');

        })
    }
    return (
         <div >
         <Form className="contact-form">
         <h2>Update Vetement</h2>
         <div className="form-content">  
             
                 <input placeholder='Type de Vetement' onChange={(e) => setType(e.target.value)}/>
                 <input placeholder='Quantite' onChange={(e) => setQuantite(e.target.value)}/>               
                 <input placeholder='Agent' onChange={(e) => setAgent(e.target.value)}/>
                 </div> 
             <input
     className="button hover"
     type="submit"
     value="Update"
     onClick={updateAPIData}
   />
         </Form>
     </div>
    )
}
