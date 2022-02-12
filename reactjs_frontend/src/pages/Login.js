import React from "react";
import Mouse from "../components/Mouse";
import LoginForm from "../components/LoginForm";
import { motion } from "framer-motion";

const Login = () => {


  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
      >
        <LoginForm />
      </motion.div>
    </main>
  );
};

export default Login;
