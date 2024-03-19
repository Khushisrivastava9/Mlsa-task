/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */
import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Khushi Srivastava",
  title: "Pre-Final year CSE Undergrad, Competitive Programmer, Full-Stack Web Developer",
  email: "srivastavakhushi582@gmail.com",
  gitHub: "Khushisrivastava9",
  instagram: "khushisrivastava973",
  linkedIn: "https://www.linkedin.com/in/khushi-srivastava-ab029621b/",
  medium: "",
  twitter: "microsoft",
  youTube: "http://www.youtube.com/@secretrockers3021",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
