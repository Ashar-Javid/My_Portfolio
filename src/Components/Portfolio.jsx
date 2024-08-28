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
import image from "../images/workspace.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Life Chess",
    description:
      "A Visual Novel game created using Renpy. It is a story of a prince who learns the meaning of life and power through the challenges given by his father to prove himself as capable to the throne.",
    url: "https://ashar-javid.itch.io/life-chess",
  },
  {
    title: "XploreBot",
    description:
      "Your personal travel guide to help you explore the world. From making your travel itinerary to acting as your tour guide, XPlore Bot is your go-to place for all sorts of travel. It can help you find hotels, flights, tourist spots, directions, and even tell you about the weather.",
    url: "https://xplore-bot.vercel.app/",
  },
  {
    title: "E-Deviser",
    description:
      "A gamified LMS platform for students to learn in an engaging environment. Virtual Classrooms, AI Tutor, LeaderBoards, Badges and much more to make learning fun.\nProfessor AI is one of the most sophisticated AI teachers to make complex concepts easy for the students.",
    url: "https://edeviser.com/",
  },
  {
    title: "Researchio",
    description:
      "A desktop tool for Research assistance developed for inhouse use. Beta version to be deployed soon.",
    url: "",
  },
  {
    title: "3D Hand Reconstruction using Transformer",
    description:
      "Research Project on the development of a generative AI pipeline for real time hand reconstruction using monocular RGB input using transformer based pipeline.",
    url: "",
  },
  {
    title: "Wireless SSTC Tesla Coil",
    description:
      "Research Project on the development of a wireless Solid State Tesla Coil for power transmission upto 2 meters with an exceptional efficiency of 70% at a voltage of 120kV.",
    url: "",
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
