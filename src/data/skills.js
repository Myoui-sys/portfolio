import backIcon from "../assets/icons/Back.svg";
import codeIcon from "../assets/icons/Code.svg";
import cssIcon from "../assets/icons/CSS.svg";
import cucumberIcon from "../assets/icons/Cucumber.svg";
import dataIcon from "../assets/icons/Dados.svg";
import figmaIcon from "../assets/icons/Figma.svg";
import gherkinIcon from "../assets/icons/Gherkin.svg";
import gitIcon from "../assets/icons/Git.svg";
import githubIcon from "../assets/icons/GitHub-Tech.svg";
import htmlIcon from "../assets/icons/HTML.svg";
import infiniteIcon from "../assets/icons/Infinite.svg";
import intellijIcon from "../assets/icons/IntelliJ.svg";
import javaIcon from "../assets/icons/Java.svg";
import javascriptIcon from "../assets/icons/JS.svg";
import laptopIcon from "../assets/icons/Laptop.svg";
import mysqlIcon from "../assets/icons/MySQL.svg";
import nodeIcon from "../assets/icons/NodeJS.svg";
import playwrightIcon from "../assets/icons/Playwright.svg";
import postgresqlIcon from "../assets/icons/PostgreSQL.svg";
import pythonIcon from "../assets/icons/Python.svg";
import reactIcon from "../assets/icons/REACT.svg";
import supabaseIcon from "../assets/icons/Supabase.svg";
import trelloIcon from "../assets/icons/Trello.svg";
import typescriptIcon from "../assets/icons/TS.svg";
import vscodeIcon from "../assets/icons/VSCode.svg";

export const skills = [
  {
    title: "Front-End",
    categoryIcon: codeIcon,
    items: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "React", icon: reactIcon },
    ],
  },
  {
    title: "Back-End",
    categoryIcon: dataIcon,
    items: [
      { name: "Python", icon: pythonIcon },
      { name: "Java", icon: javaIcon },
      { name: "Node.js", icon: nodeIcon },
    ],
  },
  {
    title: "Banco de Dados & Serviços",
    categoryIcon: backIcon,
    items: [
      { name: "MySQL", icon: mysqlIcon },
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "Supabase", icon: supabaseIcon },
    ],
  },
  {
    title: "QA & Testes",
    categoryIcon: infiniteIcon,
    items: [
      { name: "Playwright", icon: playwrightIcon },
      { name: "Cucumber", icon: cucumberIcon },
      { name: "Gherkin", icon: gherkinIcon },
    ],
  },
  {
    title: "Ferramentas",
    categoryIcon: laptopIcon,
    items: [
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: githubIcon },
      { name: "VS CODE", icon: vscodeIcon },
      { name: "IntelliJ IDEA", icon: intellijIcon },
      { name: "Figma", icon: figmaIcon },
      { name: "Trello", icon: trelloIcon },
    ],
  },
];
