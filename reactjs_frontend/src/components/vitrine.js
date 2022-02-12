import React from "react";
import { motion } from "framer-motion";
const variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.5 },
    x: 200,
  },
  visible: { 
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0.4,
    transition: { duration: 0.35 },
    x: -800,
  }
};
const transition = {
  ease: [.03,.87,.73,.9],
  duration: .6,
}

export const VitHomme = () => {

  return (
    <main>
    <motion.div className="vitrine"
     initial="initial"
     animate="visible"
     exit="exit"
     transition={transition}
     variants={variants}>
        <div className="vit">
            <h1>Doudoune</h1>
            <img src="./assets/img/Homme.jpg" alt="sf" className="phot"></img>
        </div>     
    </motion.div>
    </main>
  );
};


export const VitHomme1 = () => {

  return (
    <main>
    <motion.div className="vitrine"
     initial="initial"
     animate="visible"
     exit="exit"
     transition={transition}
     variants={variants}>
      <div className="vit">
      <h1>Capuche</h1>

           <img src="./assets/img/Homme1.jpg" alt="sf" className="phot"></img>
      </div>     
    </motion.div>
    </main>
  );
};
export const VitHomme2 = () => {

  return (
    <main>
    <motion.div className="vitrine"
     initial="initial"
     animate="visible"
     exit="exit"
     transition={transition}
     variants={variants}>
      <div className="vit">
      <h1>Jeans</h1>
           <img src="./assets/img/Homme2.jpg" alt="sf" className="phot"></img>
      </div>     
    </motion.div>
    </main>
  );
};

export const VitFemme = () => {

  return (
    <main>
    <motion.div className="vitrine"
     initial="initial"
     animate="visible"
     exit="exit"
     transition={transition}
     variants={variants}>
      <div className="vit">
        <h1>Pantalon</h1>
           <img src="./assets/img/Femme.jpg" alt="sf" className="phot"></img>
      </div>     
    </motion.div>
    </main>
  );
};

export const VitFemme1 = () => {

  return (
    <main>
    <motion.div className="vitrine"
     initial="initial"
     animate="visible"
     exit="exit"
     transition={transition}
     variants={variants}>
      <div className="vit">
        <h1>Bottes</h1>
           <img src="./assets/img/Femme1.jpg" alt="sf" className="phot"></img>
      </div>     
    </motion.div>
    </main>
  );
};

export const VitFemme2 = () => {

  return (
    <main>
    <motion.div className="vitrine"
     initial="initial"
     animate="visible"
     exit="exit"
     transition={transition}
     variants={variants}>
      <div className="vit">
        <h1>Veste</h1>
           <img src="./assets/img/Femme2.jpg" alt="sf" className="phot"></img>
      </div>     
      </motion.div>
    </main>
  );
};
export const VitEnfants = () => {

  return (
    <main>
    <motion.div className="vitrine"
     initial="initial"
     animate="visible"
     exit="exit"
     transition={transition}
     variants={variants}>
      <div className="vit">
        <h1>Capuche</h1>
           <img src="./assets/img/Enfant.jpg" alt="sf" className="phot"></img>
      </div>     
      </motion.div>
    </main>
  );
};
export const VitEnfants1 = () => {

  return (
    <main>
    <motion.div className="vitrine"
     initial="initial"
     animate="visible"
     exit="exit"
     transition={transition}
     variants={variants}>
      <div className="vit">
        <h1>Montant</h1>
           <img src="./assets/img/Enfant1.jpg" alt="sf" className="phot"></img>
      </div>     
      </motion.div>
    </main>
  );
};
export const VitBebe = () => {

  return (
    <main>
    <motion.div className="vitrine"
     initial="initial"
     animate="visible"
     exit="exit"
     transition={transition}
     variants={variants}>
      <div className="vit">
        <h1>Pyjamas</h1>
           <img src="./assets/img/Bebe.jpg" alt="sf" className="phot"></img>
      </div>     
      </motion.div>
    </main>
  );
};
export const VitBebe1 = () => {

  return (
    <main>
    <motion.div className="vitrine"
     initial="initial"
     animate="visible"
     exit="exit"
     transition={transition}
     variants={variants}>
      <div className="vit">
        <h1>Pull</h1>
           <img src="./assets/img/Bebe1.jpg" alt="sf" className="phot"></img>
      </div>     
      </motion.div>
    </main>
  );
};