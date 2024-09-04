import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import restapi from "../assets/restapi.png"
import postman from "../assets/postman.png"
import docker from "../assets/docker.png"
import bootstrap from "../assets/bootstrap.png"
import mongodb from "../assets/mongodb.png"
import mysql from "../assets/mysql.png"
// import nlp_ai_ml from "../assets/nlp_ai_ml.png"
import redux from "../assets/redux.png"
import appwrite from "../assets/appwrite.png"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-700",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-300",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: node,
      title: "Node.js",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: postman,
      title: "Postman",
      style: "shadow-orange-800",
    },
    {
      id: 9,
      src: restapi,
      title: "Rest API",
      style: "shadow-blue-600",
    },
    {
      id: 10,
      src: docker,
      title: "Docker",
      style: "shadow-blue-400",
    },
    {
      id: 11,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-300",
    },
    {
      id: 12,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 14,
      src: mysql,
      title: "MY SQL",
      style: "shadow-blue-400",
    },
    {
      id: 16,
      src: appwrite,
      title: "Appwrite",
      style: "shadow-pink-400",
    },
    // {
    //   id: 17,
    //   src: nlp_ai_ml,
    //   title: "NLP",
    //   style: "shadow-red-400",
    // },
    {
      id: 18,
      src: redux,
      title: "Redux",
      style: "shadow-purple-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full pt-20 pb-10 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
