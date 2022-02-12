import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  } from 'semantic-ui-react';
import {  Form } from 'semantic-ui-react';
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8700/users`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);
    let formMess = document.querySelector(".form-message");
    let i=0;
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     
    const test = () =>{

        APIData.map((data) => { 
      if((data.email===email)&&(data.password===password)){
        i=1;
      }return null;})
      if(i===1){
        console.log("vrai");  
        navigate("/Home");
      }
      if(i===0){
        console.log("faux");
        formMess.innerHTML =
        "Adresse ou mot de passe incorrect !";  
        formMess.style.background = "rgb(253, 87, 87)";
      formMess.style.opacity = "1";
        setTimeout(() => {
            formMess.style.opacity = "0";
          },4000);  }
    };
    const Registre = () =>{
        navigate("/Singup");

    }
    return (
        <div >
        <Form className="contact-form">

        <h2>Login</h2>

        <div className="form-content">  
            
                <input placeholder='Adresse *' onChange={(e) => setEmail(e.target.value)} required id="email"
          name="email"/>
                <input type="password" placeholder='Password *' onChange={(e) => setPassword(e.target.value)} required/>               
                </div> 
       <input
       className="button hover"
       type="submit"
       value="Connecter"
       onClick={test}

     />
       <input
       className="button hover"
       type="submit"
       value="Registre"
       onClick={Registre}

     />
               
                     
     


        </Form>
        <div className="form-message" ></div>

    </div>
    )
}
