/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/project.jpg";

const imageAltText = "project image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Job Finder Web App",
    description:
      "Engineered a cutting-edge MERN stack solution for the Job Finder project, integrating Vite and React; leveraged Tailwind CSS to craft a visually stunning interface.",
    url: "https://jobfinderwebapp.netlify.app/user-auth",
  },
  {
    title: "Travel Website",
    description:
      "Discover the world with our travel website. Explore breathtaking destinations, find exclusive deals, and plan your perfect getaway effortlessly. Whether you seek adventure, relaxation, or cultural immersion, we're here to make your travel dreams a reality. Start your journey today!",
    url: "https://github.com/Khushisrivastava9/Travel-website",
  },
  {
    title: "My Resume",
    description:
      "Created the resume using Ms Word. Includes my experience and skills.",
    url: "https://drive.google.com/file/d/1baEZ_wDrtXJXRt5nB6pV9UXdr83NqkoG/view?usp=sharing",
  },
  {
    title: "Grocery Website",
    description:
      "The Local Grocery store will provide all the facilities online with home delivery as soon as possible on customer demand.Here the Retailer checks for the availability, delivery, and shortage of goods in the store and proper payment during this process.",
    url: "https://github.com/Khushisrivastava9/Grocery-website",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
