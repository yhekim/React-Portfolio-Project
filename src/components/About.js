import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="content about"
      initial={{ rotateY: "-90", x: "-200" }}
      animate={{ rotateY: 0, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
    >
      <h2 style={{ marginBottom: "0.5rem" }}>About Me</h2>
      <hr />
      <h4 style={{ margin: "1rem 0" }}>Hi, I'm Yusuf Hekim</h4>
      <p style={{ margin: "1rem 0" }}>
        As of July 2020, I graduated from Sakarya University Computer
        Engineering Department with a credit score of 3.60 as the second in the
        department.I am currently developing a project in the fronted part as a
        freelancer with React JS and React Native. I am also receiving
        Full-Stack Developer software training at Clarusway Bootcamp, which I
        started in June 2021.
      </p>
      <p style={{ margin: "1rem 0" }}>
        I’m an easy going person that works well with everyone. I enjoy being
        around different types of people and I like to always challenge myself
        to improve at everything I do.
      </p>
      <p style={{ margin: "1rem 0" }}>
        I have a great passion for learning languages and exploring the world
        and also programming. I have always loved technology and programming.
        And this is my profession now.
      </p>
    </motion.div>
  );
};

export default About;
