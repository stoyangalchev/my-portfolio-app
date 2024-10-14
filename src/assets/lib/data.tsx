import vscodeicon from "../../assets/icons/vscodeicon.svg";
import githubicon from "../../assets/icons/githubicon.svg";
import postmanicon from "../../assets/icons/postmanicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import angularicon from "../../assets/icons/angularicon.svg";
import mysqlicon from "../../assets/icons/mysqlicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import viteicon from "../../assets/icons/viteicon.svg";
import reduxicon from "../../assets/icons/reduxicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import giticon from "../../assets/icons/giticon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import rxjsicon from "../../assets/icons/rxjsicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import fastfurious from "../../assets/img/fast-and-furious.png";
import weatherapp from "../../assets/img/weather-app.png"
import webflix from "../../assets/img/webflix.png";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import vercelwhiteicon from "../../assets/icons/vercelwhiteicon.svg";
import vercelicon from "../../assets/icons/vercelicon.svg";
import dockericon from "../../assets/icons/dockericon.svg";
import dockericonwhite from "../../assets/icons/dockericonwhite.svg";

import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";

export const headerIntroData = {
  title: {
    bg: "Здравейте, казвам се Стоян",
    en: "Hi, I'm Stoyan",
  },
  subtitle: "Fullstack Developer ",
  description: {
    bg: "Аз съм Стоян, fullstack разработчик с цел да напредна в кариерата си и да участвам във вдъхновяващи проекти. Тук представям работата си и страстта си към уеб разработката. Нека заедно създадем цифрови решения и оформим бъдещето!",
    en: "I'm Stoyan, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        bg: "Свържете се с мен",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        bg: "Моите проекти",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Fast and Furious",
    description:
      "Бързи и яростни е предназначен за автомобилни ентусиасти, които искат да изследват, да допринесат и да се ангажират с оживена общност от любители на превозни средства. От добавяне на любимите ви превозни средства до коментиране и харесване, това приложение вдъхва живот на вашите автомобилни страсти!",
    description_EN:
      "Fast and Furious is designed for car enthusiasts who want to explore, contribute and engage with a vibrant community of vehicle enthusiasts. From adding your favorite vehicle to commenting and liking, this app brings your automotive passions to life!",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Postman", icon: postmanicon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Vite", icon: viteicon },
      { name: "Mongo DB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Render", icon: rendericon },
    ],
    image: fastfurious,
    deploymenturl: "https://fast-and-furious-sigma.vercel.app",
    githuburl: "https://github.com/stoyangalchev/Fast-and-Furious/tree/main",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Weather App",
    description:
      "Лесно, удобно за потребителя приложение за времето, което предоставя подробни текущи и прогнозирани данни за времето. Превключвайте лесно между Целзий и Фаренхайт, изследвайте интерактивна карта.",
    description_EN:
      "A simple, user-friendly weather application that provides detailed current and forecasted weather data. Easily switch between Celsius and Fahrenheit, explore an interactive map.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Vite", icon: viteicon },
      { name: "Node.js", icon: nodejsicon },
      { name: "Render", icon: rendericon },
    ],
    image: weatherapp,
    deploymenturl: "https://weather-app-48lb.onrender.com/",
    githuburl: "https://github.com/stoyangalchev/Weather-App",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Webflix",
    description:
      "Това приложение ви позволява да откривате страхотни филми, да добавяте любими към персонализирани списъци и да споделяте мислите си с оживена общност в Angular SPA. Оценявайте филми, оставяйте коментари и се свързвайте с колеги филмови ентусиасти - защото филмите са по-добри, когато се споделят!",
    description_EN:
      "This app lets you discover great films, add favorites to personalized lists, and share your thoughts with a lively community in an Angular SPA. Rate movies, leave comments, and connect with fellow film enthusiasts—because movies are better when shared!",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Render", icon: rendericon },
      { name: "Angular", icon: angularicon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "REST Api", icon: apiicon },
      { name: "Postman", icon: postmanicon },
      { name: "RXJS", icon: rxjsicon },
    ],
    image: webflix,
    deploymenturl: "https://silentmoon-grpw.onrender.com/",
    githuburl:
      "https://github.com/StoyanC/Fullstack_Abschlussprojekt_SilentMoon",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    bg: "Повече проекти в Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Angular",
        hash: "#Angular",
        icon: angularicon,
        color: "#dd0031",
      },

      {
        title: "MySQL",
        hash: "#MySQL.js",
        icon: mysqlicon,
        color: "#f8981d",
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Vite",
        hash: "#Vite",
        icon: viteicon,
        color: "#BD34FE",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },

      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Git",
        hash: "#Git",
        icon: giticon,
        color: "#F24E1E",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Tech",
    skills: [
      {
        title: "Docker",
        hash: "#Docker",
        icon: [dockericon, dockericonwhite],
        color: ["#000000", "#fafcfc"],
      },
      {
        title: "Vs Code",
        hash: "#Vs Code",
        icon: vscodeicon,
        color: "#007ACC",
      },
      {
        title: "Copilot",
        hash: "#Copilot",
        icon: githubicon,
        color: "#BD34FE",
      },
      {
        title: "Render",
        hash: "#Render",
        icon: rendericon,
        color: "#1eebcc",
      },
      {
        title: "Redux",
        hash: "#Redux",
        icon: reduxicon,
        color: "#BD34FE",
      },
      {
        title: "API",
        hash: "#API",
        icon: apiicon,
        color: "#f23405",
      },
      {
        title: "JWT & Bcrypt",
        hash: "#JWT & Bcrypt",
        icon: jwticon,
        color: "#BD34FE",
      },
      {
        title: "RXJS",
        hash: "#RXJS",
        icon: rxjsicon,
        color: "#f00592",
      },

      {
        title: "Vercel",
        hash: "#Vercel",
        icon: [vercelicon, vercelwhiteicon],
        color: ["#000000", "#fafcfc"],
      },
      {
        title: "Postman",
        hash: "#Postman",
        icon: postmanicon,
        color: "#F24E1E",
      },
    ],
  },
] as const;

export const navLinks = [
  { bg: "Начало", en: "Home", hash: "#home", icon: GoHome },
  { bg: "Умения", en: "Skills", hash: "#skills", icon: GoStack },
  { bg: "Проекти", en: "Projects", hash: "#projects", icon: GoProject },
  { bg: "За мен", en: "About me", hash: "#about-me", icon: GoPerson },
  { bg: "Контакти", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const sideBarRightMail = {
  link: "mailto:galchev98@gmail.com",
  text: "galchev98@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/stoyan-galchev-21612a274/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/StoyanGalchev",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:galchev98@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    bg: '"Единственият начин да вършите страхотна работа е да обичате това, което правите."',
    en: `"The only way to do great work is to love what you do."`,
    author: "Steve Jobs",
  },
  {
    bg: '"Великите неща никога не идват от зоните на комфорт."',
    en: `"Great things never come from comfort zones."`,
  },
] as const;

export const contactData = {
  title: "Свържете се с мен",
  title_EN: "Contact Me",
  email: "Имейл",
  email_EN: "Email",
  downloadResume: "Изтеглете моето CV",
  downloadResume_EN: "Download My Resume",
} as const;

export const aboutMeData = {
  title: "За мен",
  title_EN: "About me",
  description: "Няколко неща за мен",
  description_EN: "A few things about me",
  paragraphs_BG: [
    {
      title: "Технологичен ентусиаст по душа",
      description:
        "Страстта ми е към компютърните технологии и всичко технологично. От хардуер до софтуер, обичам да изследвам и възприемам иновациите, които оформят нашия свят.",
      icon: hardwareicon,
    },
    {
      title: "По бързата лента на живота",
      description:
        "Освен кодирането, обичам да съм в бързата лента – в истинския смисъл на думата. Колите са моята страст и обичам да карам машини с висока мощност по непознати пътища.",
      icon: caricon,
    },
    {
      title: "Радостта от откритието ",
      description:
        "Пътуването на живота е приключение на изследване и растеж. Всяко ново преживяване, независимо дали е познато или непознато, обогатява нашата история и подхранва личното развитие.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "Tech Enthusiast at Heart",
      description:
        "My passion lies in computer technology and everything tech. From hardware to software, I love exploring and embracing the innovations that shape our world.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Line of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery ",
      description:
        "Life’s journey is an adventure of exploration and growth. Each new experience, whether familiar or unknown, enriches our story and fuels personal development.",
      icon: travelicon,
    },
  ],
};

export const toastMessages = {
  loadingProject: {
    bg: "🦄 Демото на живо ще бъде отворено скоро. Сървърите стартират...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
} as const;

export const buttonLabels = {
  language: {
    bg: "BG",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
