import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        As a frontend web developer, I am enthusiastic about enhancing my skills and embracing new technologies. I am open to learning and working with any web technology.
        </p>

        <br />

        <p className="text-xl">
        I take pleasure in crafting or revamping a unique identity for a product or service, attracting increased traffic from search engines and social platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
