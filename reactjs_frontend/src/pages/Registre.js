import React from "react";
import Mouse from "../components/Mouse";
import RegistreForm from "../components/RegistreForm";
import { motion } from "framer-motion";

const Registre = () => {


  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
      >
        <RegistreForm />
      </motion.div>
    </main>
  );
};

export default Registre;
