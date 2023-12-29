import React from "react";
import api from "../assets/portfolio/api.png";
import apod from "../assets/portfolio/apod.png";
import nftportal from "../assets/portfolio/nftportal.png";
import webpostman from "../assets/portfolio/webpostman.png";
import waveportal from "../assets/portfolio/waveportal.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: api,
      link: 'https://orsanjiv-random-movie-selector.netlify.app/',
      repo: 'https://github.com/orsanjiv'
    },
    {
      id: 2,
      src: webpostman,
      link: 'https://expensetracker-web-app.netlify.app/',
      repo: 'https://github.com/orsanjiv'
    },
    {
      id: 3,
      src: apod,
      link: 'https://orsanjiv-task-tracker.netlify.app/',
      repo: 'https://github.com/orsanjiv'
    },
    {
      id: 4,
      src: waveportal,
      link: 'https://orsanjiv-quiz-platform.netlify.app/',
      repo: 'https://github.com/orsanjiv'
    },
    {
      id: 5,
      src: nftportal,
      link: 'https://orsanjiv-simple-blog-platform.netlify.app/',
      repo: 'https://github.com/orsanjiv'
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Feel free to explore some of my projects right here.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
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
