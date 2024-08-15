import React from "react";
import DataTable from "../assets/portfolio/DataTable.png";
import Nqueen from "../assets/portfolio/Nqueen.png";
import TaskManagement from "../assets/portfolio/TaskManagement.jpg";
import Ai_Virtual_Voice_Assistant from "../assets/portfolio/Ai_Virtual_Voice_Assistant.png";
import Steganography from "../assets/portfolio/Steganography.png";

const Portfolio = () => {
  const portfolios = [

    {
      id: 1,
      src: Steganography,
      demoLink: "https://stegoimage.netlify.app/",
      codeLink: "https://github.com/rahulkumar75/Steganography",
      title: "Steganography",
      discription:
        "This web-based tool enables users to securely encrypt and decrypt text messages within images. Utilizing the CryptoJS library for AES encryption, the project includes features for image preview, encoding messages into images, and decoding them back."
    },
    {
      id: 2,
      src: Nqueen,
      demoLink: "https://n-queens-solver-one.vercel.app/",
      codeLink: "https://github.com/rahulkumar75/N-Queens-Solver",
      title: "N Queen Solver",
      discription:
        "A web-based application developed to solve and visually represent the N-Queens problem. The tool allows users to place N queens on an N×N chessboard such that no two queens threaten each other, showcasing algorithmic problem-solving skills."
    },
    {
      id: 3,
      src: Ai_Virtual_Voice_Assistant,
      demoLink: "",
      codeLink: "https://github.com/rahulkumar75/Ai_Virtual_Voice_Assistant",
      title: "AI Virtual Voice Assistant",
      discription:
        "An AI-powered virtual assistant that uses natural language processing (NLP) and deep learning to understand and respond to user commands. It can perform tasks ranging from simple queries to more complex operations like searching the internet and sending emails."
    },
    {
      id: 4,
      src: DataTable,
      demoLink: "https://data-table-lac.vercel.app/",
      codeLink: "https://github.com/rahulkumar75/Data-Table",
      title: "Data Table",
      discription:
        "Designed to manage and display a collection of user data, this application offers functionality for adding, editing, deleting, and searching user entries. It also features pagination for efficient navigation through large datasets."
    },
    {
      id: 5,
      src: TaskManagement,
      demoLink: "",
      codeLink: "https://github.com/rahulkumar75/Task-Management",
      title: "Task Management",
      discription:
        "A simple yet effective task management application that allows users to create, read, update, and delete tasks. This project demonstrates full-stack development skills, with a focus on both front-end and back-end integration."
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold mt-2 inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink, title, discription }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <img
                src={src}
                alt={title}
                className="rounded-t-md duration-200 hover:scale-105"
              />
              <div className="px-4 py-2">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-400 mt-2">{discription}</p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => window.open(demoLink, "_blank")}
                  className="w-1/2 bg-blue-500 text-white px-6 py-3 m-4 duration-200 hover:scale-105 rounded-bl-lg"
                >
                  Demo
                </button>
                <button
                  onClick={() => window.open(codeLink, "_blank")}
                  className="w-1/2 bg-gray-700 text-white px-6 py-3 m-4 duration-200 hover:scale-105 rounded-br-lg"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
