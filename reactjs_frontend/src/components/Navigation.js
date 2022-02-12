import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {

  return (
    <div className="navigation">
      <ul>
        <NavLink to="/Home" exact activeClassName="nav-active" className="hover">
          <li>accueil</li>
        </NavLink>

        <li className="nav-portfolio">Vetements
          <ul className="nav-projects">
            <NavLink to="/Homme" activeClassName="nav-active" className="hover">
              <li>Homme</li>
            </NavLink>
            <NavLink to="/Femme" activeClassName="nav-active" className="hover">
              <li>Femme</li>
            </NavLink>
            <NavLink to="/Enfants" activeClassName="nav-active" className="hover">
              <li>Enfants</li>
            </NavLink>
            <NavLink to="/Bebe" activeClassName="nav-active" className="hover">
              <li>Bebe</li>
            </NavLink>
          </ul>
        </li>
        <li className="nav-portfolio">Stocks
          <ul className="nav-projects">
            <NavLink to="/gestion" activeClassName="nav-active" className="hover">
              <li>Ajouter</li>
            </NavLink>
            <NavLink to="/read" activeClassName="nav-active" className="hover">
              <li>Consulter</li>
            </NavLink>
          </ul>
        </li>
        <NavLink to="/contact" activeClassName="nav-active" className="hover">
          <li>contact</li>
        </NavLink>
        
      </ul>
      <ul >
      <NavLink to="/" activeClassName="nav-active" className="hover">
          <li>Log Out</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
