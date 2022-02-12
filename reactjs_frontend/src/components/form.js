import React, { useState } from 'react';
import {  Form } from 'semantic-ui-react'
import axios from 'axios';


export default function Create() {
    let formMess = document.querySelector(".form-message");
    const [type, setType] = useState('');
    const [quantite, setQuantite] = useState('');
    const [agent, setAgent] = useState('');
    const postData = () => {
        axios.post(`http://localhost:8700/vetements`, {
            type,
            quantite,
            agent
        })
        formMess.innerHTML =
        "Ajouter avec succes";
      formMess.style.background = "#00c1ec";
      formMess.style.opacity = "1";
      setType("");
      setQuantite("");
      setAgent("");
      setTimeout(() => {
        formMess.style.opacity = "0";
      }, 5000);
    }
    return (
        <div >
            <Form className="contact-form">
            <h2>Ajouter Vetement</h2>
            <div className="form-content">  
                
                    <input placeholder='Type de Vetement' onChange={(e) => setType(e.target.value)} name='type'/>
                    <input type="number" placeholder='Quantite' onChange={(e) => setQuantite(e.target.value)}/>               
                    <input placeholder='Agent' onChange={(e) => setAgent(e.target.value) }name='agent'/>
                    </div> 
                <input
        className="button hover"
        type="submit"
        value="Ajouter"
        onClick={postData}
      />
                     <div className="form-message"></div>

            </Form>
        </div>
    )
}