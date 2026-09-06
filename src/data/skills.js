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
      {
        name: "HTML",
        icon: htmlIcon,
        url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
      },
      {
        name: "CSS",
        icon: cssIcon,
        url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
      },
      {
        name: "TypeScript",
        icon: typescriptIcon,
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "JavaScript",
        icon: javascriptIcon,
        url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
      },
      {
        name: "React",
        icon: reactIcon,
        url: "https://react.dev/",
      },
    ],
  },

  {
    title: "Back-End",
    categoryIcon: dataIcon,
    items: [
      {
        name: "Python",
        icon: pythonIcon,
        url: "https://www.python.org/",
      },
      {
        name: "Java",
        icon: javaIcon,
        url: "https://dev.java/",
      },
      {
        name: "Node.js",
        icon: nodeIcon,
        url: "https://nodejs.org/",
      },
    ],
  },

  {
    title: "Banco de Dados & Serviços",
    categoryIcon: backIcon,
    items: [
      {
        name: "MySQL",
        icon: mysqlIcon,
        url: "https://www.mysql.com/",
      },
      {
        name: "PostgreSQL",
        icon: postgresqlIcon,
        url: "https://www.postgresql.org/",
      },
      {
        name: "Supabase",
        icon: supabaseIcon,
        url: "https://supabase.com/",
      },
    ],
  },

  {
    title: "QA & Testes",
    categoryIcon: infiniteIcon,
    items: [
      {
        name: "Playwright",
        icon: playwrightIcon,
        url: "https://playwright.dev/",
      },
      {
        name: "Cucumber",
        icon: cucumberIcon,
        url: "https://cucumber.io/",
      },
      {
        name: "Gherkin",
        icon: gherkinIcon,
        url: "https://cucumber.io/docs/gherkin/",
      },
    ],
  },

  {
    title: "Ferramentas",
    categoryIcon: laptopIcon,
    items: [
      {
        name: "Git",
        icon: gitIcon,
        url: "https://git-scm.com/",
      },
      {
        name: "GitHub",
        icon: githubIcon,
        url: "https://github.com/",
      },
      {
        name: "VS CODE",
        icon: vscodeIcon,
        url: "https://code.visualstudio.com/",
      },
      {
        name: "IntelliJ IDEA",
        icon: intellijIcon,
        url: "https://www.jetbrains.com/idea/",
      },
      {
        name: "Figma",
        icon: figmaIcon,
        url: "https://www.figma.com/",
      },
      {
        name: "Trello",
        icon: trelloIcon,
        url: "https://trello.com/",
      },
    ],
  },
];