import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  } from 'semantic-ui-react';
import {  Form } from 'semantic-ui-react';
import { useNavigate } from "react-router-dom";


export default function RegistreForm() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8700/users`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    let formMess = document.querySelector(".form-message");
    let i=0;let p=0;
    const navigate = useNavigate();
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPass] = useState('');
     const [repassword, setRePass] = useState('');
     const postData = () => {
      axios.post(`http://localhost:8700/users`, {
          name,
          email,
          password
      })
      console.log("vrai");  
      formMess.innerHTML =
      "Compte enregistrer";  
      formMess.style.background = "#00c1ec";
      formMess.style.opacity = "1";
      setTimeout(() => {
          formMess.style.opacity = "0";
        },4000); 
    }
     
    const test = () =>{

        APIData.map((data) => { 
      if((data.email===email)){

        i=1;
      }return null;})
      if(password===repassword){
         p=1; 
      }
      if((i===0)&&(p===1)){
        postData();
      }
      if((i===1)&&(p===1)){
        console.log("faux");
        formMess.innerHTML =
        "Adresse allreday existe !";  
        formMess.style.background = "rgb(253, 87, 87)";
        formMess.style.opacity = "1";
        setTimeout(() => {
            formMess.style.opacity = "0";
          },4000);  }
      if(p===0){
        formMess.innerHTML =
        "Retaper password !";  
        formMess.style.background = "rgb(253, 87, 87)";
        formMess.style.opacity = "1";
        setTimeout(() => {
            formMess.style.opacity = "0";
          },4000);  }
      
    };
    const Registre = () =>{
        navigate("/");

    }
    return (
        <div >
        <Form className="contact-form">

        <h2>Login</h2>

        <div className="form-content">  
                <input placeholder='Name *' onChange={(e) => setName(e.target.value)} required/>
                <input placeholder='Adresse *' onChange={(e) => setEmail(e.target.value)} required id="email"
          name="email"/>
                <input type="password" placeholder='Password *' onChange={(e) => setPass(e.target.value)} required/>   
                <input type="password" placeholder='Password Re-Type *' onChange={(e) => setRePass(e.target.value)} required/>


                </div> 
       <input
       className="button hover"
       type="submit"
       value="Registre"
       onClick={test}

     />
       <input
       className="button hover"
       type="submit"
       value="Return to login"
       onClick={Registre}

     />
               
                     
     


        </Form>
        <div className="form-message" ></div>

    </div>
    )
}
