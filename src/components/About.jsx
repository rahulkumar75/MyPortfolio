import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello! I’m a passionate Full Stack Developer with a solid foundation in web development, 
        specializing in creating dynamic and responsive applications. As a recent graduate from BIT Mesra, 
        I’ve developed my skills in JavaScript, React.js, and the MERN stack. My experience spans in both front-end and back-end development, 
        where I strive to build seamless and user-friendly interfaces combined with robust backend logic.
        </p>

        <br />

        <p className="text-xl">
        I’ve worked on projects ranging from Ai Virtual Voice Assistant to image processing applications, 
        showcasing my versatility and commitment to learning. 
        My goal is to leverage my skills in building scalable and efficient applications that solve real-world problems.
        </p>

        <br />

        {/* <p className="text-xl">
        I’m excited to continue growing as a developer, embracing new challenges, and contributing to innovative projects.
        </p> */}
        {/*Boom Boom */}
      </div>
    </div>
  );
};

export default About;
