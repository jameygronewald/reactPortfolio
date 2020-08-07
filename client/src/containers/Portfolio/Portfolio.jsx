import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import memoryMaker from "../../assets/appImages/memoryMaker.png";
import readMoreTV from "../../assets/appImages/readMoreTv.png";
import employeeDirectory from "../../assets/appImages/employeeDirectory.png";
import burgerApp from "../../assets/appImages/burgerApp.png";
import workdayScheduler from "../../assets/appImages/workdayScheduler.png";
import javascriptCodeQuiz from "../../assets/appImages/jsCodeQuiz.png";

const Portfolio = () => {
  return (
    <main className="containter">
      <h1 id="portfolioHeader">Portfolio</h1>
      <div className="row projectRow">
        <ProjectCard
          imageName={memoryMaker}
          projectTitle="Memory Maker"
          cardText="Memory Maker is a full-stack web application created with the MVC paradigm. Memory Maker uses node.js with an express.js server, a mySQL database, a sequelize ORM, and handlebars.js as a view engine. The app features an interactive UI and responsive design."
          deployedLink="https://memory-maker.herokuapp.com/"
          repoName="memoryMaker"
        />
        <ProjectCard
          imageName={readMoreTV}
          projectTitle="ReadMoreTV"
          cardText="Web app that allows users to search for a TV show and return book recommendations. Uses TVMaze and Google Books APIs, along with jQuery to dynamicall generate search results and relevant data for the user."
          deployedLink="https://jameygronewald.github.io/readMoreTV/"
          repoName="readMoreTV"
        />
        <ProjectCard
          imageName={employeeDirectory}
          projectTitle="Employee Directory"
          cardText="Employee Directory is a front-end React app that displays a table of dynamically generated employee information and allows the user to filter and sort through the directory. The app uses the node package Axios to make a call to a 3rd party API called Random User Generator, and then uses array methods to manipulate state and update the employee table via user interaction with an input and dropdown."
          deployedLink="https://jameygronewald.github.io/employeeDirectory/"
          repoName="employeeDirectory"
        />
        <ProjectCard
          imageName={burgerApp}
          projectTitle="Burger App"
          cardText="Full-stack MVC app that uses node, handlebars, express, mySQL, and object-relational mapping."
          deployedLink="https://voyage-gerard-25423.herokuapp.com/"
          repoName="burgerApp"
        />
        <ProjectCard
          imageName={workdayScheduler}
          projectTitle="Work Day Scheduler"
          cardText="Web app that allows user to input activities for each hour of the day and save them to local storage so their tasks persists beyond page refresh. Uses moment.js and jQuery to dynamically generate date, time, and DOM elements for intuitive UI/UX."
          deployedLink="https://jameygronewald.github.io/workDaySchedule/"
          repoName="workDaySchedule"
        />
        <ProjectCard
          imageName={javascriptCodeQuiz}
          projectTitle="JavaScript Code Quiz"
          cardText="Timed, multiple-choice JavaScript code quiz. Uses vanilla JavaScript DOM manipulation."
          deployedLink="https://jameygronewald.github.io/javascriptCodeQuiz/"
          repoName="javascriptCodeQuiz"
        />
      </div>
    </main>
  );
};

export default Portfolio;
