import alivioImg from "../assets/img/priviews/alivio.png";
import robyImg from "../assets/img/priviews/roby.png";
import todosImg from "../assets/img/priviews/todo.png";
import gameImg from "../assets/img/priviews/education-game.png";
import motivationImg from "../assets/img/priviews/motivation.png";
import pizzatutImg from "../assets/img/priviews/pizzatut.png";

export const sites = [
  {
    name: "Education Game",
    imageUrl: gameImg,
    url: "https://education-game.vercel.app/auth/signin",
    design: "Figma",
    code: ["ReactJS 18", "Context API", "React Router v6", "CSS-Modules/SCSS"],
    description: [
      "User registration",
      "Game progress",
      "Cross-browser",
      "Adaptive",
    ],
  },
  {
    name: "PIZZATUT",
    imageUrl: pizzatutImg,
    url: "https://pizzatut-site.vercel.app/",
    design: "Figma",
    code: ["React JS v18", "Redux Toolkit", "React Hooks", "SCSS"],
    description: [
      "Cart page",
      "Product page",
      "Search, Sort, Filtering",
      "Cross-browser",
      "Adaptive",
    ],
  },
  {
    name: "Alivio",
    imageUrl: alivioImg,
    url: "https://alivio-landing.vercel.app/",
    design: "Figma",
    code: ["HTML", "SCSS", "JS"],
    description: ["BEM", "Cross-browser", "Adaptive"],
  },

  {
    name: "Roby",
    imageUrl: robyImg,
    url: "https://roby-landing.vercel.app/",
    design: "Figma",
    code: ["HTML", "SCSS", "JS"],
    description: ["BEM", "Cross-browser"],
  },

  {
    name: "Todos",
    imageUrl: todosImg,
    url: "https://todo-list-eight-lilac-49.vercel.app/",
    design: "Figma",
    code: [
      "ReactJS",
      "React Hooks",
      "CSS-Modules/SCSS",
      "React-icons",
      "react-uuid",
    ],
    description: [
      "Create togo",
      "Save togo",
      "Delete togo",
      "Cross-browser",
      "Adaptive",
    ],
  },

  {
    name: "Motivational microservice",
    imageUrl: motivationImg,
    url: "https://zemay-13.github.io/motivation-site/",
    design: "Figma",
    code: ["HTML", "CSS", "JS"],
    description: ["Microservice", "Generation phrase", "Adaptive"],
  },
];
