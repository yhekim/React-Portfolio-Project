import React from "react";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <motion.div
      className="content"
      initial={{ rotateY: "-90", x: "-200" }}
      animate={{ rotateY: 0, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
    >
      <h3 style={{ marginBottom: "0.5rem", textAlign: "center" }}>
        These are some of my works. You can find more in my{" "}
        <a
          target="_blank"
          href="https://github.com/yhekim"
          style={{ textDecoration: "underline", color: "orange" }}
        >
          {" "}
          GitHub profile
        </a>
      </h3>
      <div className="works">
        <div className="works-item">
          <div className="works-item-img">
            <img
              src="https://github.com/yhekim/fireblog/blob/main/fireblog.gif?raw=true"
              alt=""
            />
          </div>
          <div className="works-item-header">
            <a
              target="_blank"
              href="https://github.com/yhekim/fireblog"
              style={{ padding: "0 4px", textAlign: "center" }}
            >
              Fireblog with Firebase
            </a>
          </div>
          <div className="works-item-button">
            <a target="_blank" href="https://github.com/yhekim/fireblog">
              <i className="fas fa-code"></i>&ensp;Source Code
            </a>
          </div>
        </div>
        <div className="works-item">
          <div className="works-item-img">
            <img
              src="https://raw.githubusercontent.com/yhekim/React-Native-TodoList-withState/main/react-native-todoList.gif"
              alt=""
            />
          </div>
          <div className="works-item-header">
            <a
              target="_blank"
              href="https://github.com/yhekim/React-Native-TodoList-withState"
              style={{ padding: "0 4px", textAlign: "center" }}
            >
              React Native ToDo List
            </a>
          </div>
          <div className="works-item-button">
            <a
              target="_blank"
              href="https://github.com/yhekim/React-Native-TodoList-withState"
            >
              <i className="fas fa-code"></i>&ensp;Source Code
            </a>
          </div>
        </div>
        <div className="works-item">
          <div className="works-item-img">
            <img
              src="https://raw.githubusercontent.com/yhekim/gif-directory/main/tweet_1.gif"
              alt=""
            />
          </div>
          <div className="works-item-header">
            <a
              target="_blank"
              href="https://github.com/yhekim/react-faketweet"
              style={{ padding: "0 4px", textAlign: "center" }}
            >
              React Fake Tweet
            </a>
          </div>
          <div className="works-item-button">
            <a
              target="_blank"
              href="https://raw.githubusercontent.com/yhekim/gif-directory/main/tweet_1.gif"
            >
              <i className="fas fa-code"></i>&ensp;Source Code
            </a>
          </div>
        </div>
        <div className="works-item">
          <div className="works-item-img">
            <img
              src="https://raw.githubusercontent.com/yhekim/Recipe_App/main/food-search-app.gif"
              alt=""
            />
          </div>
          <div className="works-item-header">
            <a
              target="_blank"
              href="https://github.com/yhekim/Recipe_App"
              style={{ padding: "0 4px", textAlign: "center" }}
            >
              Recipe App
            </a>
          </div>
          <div className="works-item-button">
            <a target="_blank" href="https://github.com/yhekim/Recipe_App">
              <i className="fas fa-code"></i>&ensp;Source Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
