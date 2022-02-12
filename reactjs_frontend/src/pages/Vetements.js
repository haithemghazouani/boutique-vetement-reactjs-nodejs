import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import Mouse from "../components/Mouse";
import {VitHomme,VitHomme1,VitHomme2,VitFemme,VitFemme1,VitFemme2,VitEnfants,VitEnfants1,VitBebe,VitBebe1} from "../components/vitrine";

export const Homme = () => {
  return (
    <main>
         <Mouse />

      <div className="project">
  
      <Navigation />
        <VitHomme />
        <div className="project-content">
        <h1>Vetement pour Homme</h1>
      </div> 
        <ButtonsBottom left={"/Bebe1"} right={"/Homme1"} />

      </div>
    </main>
  );
};

export const Homme1 = () => {
  return (
    <main>
      <div className="project">
      <Mouse />
      <Navigation />
      <div className="project-content">
        <h1>Vetement pour Homme</h1>
      </div> 
              <VitHomme1 />
        <ButtonsBottom left={"/Homme"} right={"/Homme2"} />
      </div>
    </main>
  );
};
export const Homme2 = () => {
  return (
    <main>
      <div className="project">
      <Mouse />
      <Navigation />
      <div className="project-content">
        <h1>Vetement pour Homme</h1>
      </div> 
              <VitHomme2 />
        <ButtonsBottom left={"/Homme1"} right={"/Femme"} />
      </div>
    </main>
  );
};

export const Femme = () => {
  return (
    <main>
      <div className="project">
      <Mouse />
      <Navigation />
      <div className="project-content">
        <h1>Vetement pour Femme</h1>
      </div>         
      <VitFemme />

        <ButtonsBottom left={"/Homme2"} right={"/Femme1"} />
      </div>
    </main>
  );
};
export const Femme1 = () => {
  return (
    <main>
      <div className="project">
      <Mouse />
      <Navigation />
      <div className="project-content">
        <h1>Vetement pour Femme</h1>
      </div>      
              <VitFemme1 />

        <ButtonsBottom left={"/Femme"} right={"/Femme2"} />
      </div>
    </main>
  );
};
export const Femme2 = () => {
  return (
    <main>
      <div className="project">
      <Mouse />
      <Navigation />
      <div className="project-content">
        <h1>Vetement pour Femme</h1>
      </div>      
              <VitFemme2 />

        <ButtonsBottom left={"/Femme1"} right={"/Enfants"} />
      </div>
    </main>
  );
};
export const Enfants = () => {
  return (
    <main>
      
      <div className="project">
      <Mouse />
      <Navigation />
      <div className="project-content">
        <h1>Vetement pour Enfants</h1>
      </div>             
       <VitEnfants />

        <ButtonsBottom left={"/Femme2"} right={"/Enfants1"} />

      </div>
    </main>
  );
};
export const Enfants1 = () => {
  return (
    <main>
      
      <div className="project">
      <Mouse />
      <Navigation />
      <div className="project-content">
        <h1>Vetement pour Enfants</h1>
      </div> 
        <VitEnfants1 />

        <ButtonsBottom left={"/Enfants"} right={"/Bebe"} />

      </div>
    </main>
  );
};

export const Bebe = () => {
  return (
    <main>
      
      <div className="project">
      <Mouse />
      <Navigation />
      <div className="project-content">
        <h1>Vetement pour Bebe</h1>
      </div>        
       <VitBebe />

        <ButtonsBottom left={"/Enfants1"} right={"/Bebe1"} />

      </div>
    </main>
  );
};
export const Bebe1 = () => {
  return (
    <main>
      
      <div className="project">
      <Mouse />
      <Navigation />
      <div className="project-content">
        <h1>Vetement pour Bebe</h1>
      </div>   
              <VitBebe1 />

        <ButtonsBottom left={"/Bebe"} right={"/Homme"} />

      </div>
    </main>
  );
};