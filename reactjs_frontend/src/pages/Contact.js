import React from "react";
import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";

const Contact = () => {


  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
      >
        <Navigation />
        <ContactForm />
      </motion.div>
    </main>
  );
};

export default Contact;
