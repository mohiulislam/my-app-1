import React from "react";
import introData from "../data/introData.js";
import styles from "../assets/css/Intro.module.css";
class Intro extends React.Component {
  render() {
    return (
      <div id={styles.introDiv}>
        <h6>Hi, my name is</h6>
        <h1>{introData.name}</h1>
        <h1>I build things for the web.</h1>
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Upstatement.
        </p>
      </div>
    );
  }
}
export default Intro;
