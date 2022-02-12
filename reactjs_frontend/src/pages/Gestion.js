import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import Create from "../components/form";
import Update from '../components/update';

import Lire from "../components/lire";

export const Gestion = () => {
  return(
      <main>   
     
      
      <div className="contact"
        exit="out"
        animate="in"
        initial="out">
           <Mouse />
      <Navigation />
        <Create/>
       </div>
    
    </main>
 
  );
};
export const Read = () => {
    return(
        <main>
   <div className="tb">
        <Mouse />
        <Navigation />
          <Lire />
      </div>
      </main>
 
    );
  };
  export const Updat = () => {
    return(
        <main>   
       
        
        <div className="contact"
          exit="out"
          animate="in"
          initial="out">
             <Mouse />
        <Navigation />
          <Update/>
         </div>
      
      </main>
   
    );
  };