import {
  AiFillHome,
  AiFillQuestionCircle,
  AiFillProject,
} from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    class: "nav-text",
    destination: "header-container",
    offset: 80,
  },
  {
    title: "About",
    path: "/",
    icon: <AiFillQuestionCircle />,
    class: "nav-text",
    destination: "about-container",
    offset: 20,
  },
  {
    title: "Experience",
    path: "/",
    icon: <BsPersonWorkspace />,
    class: "nav-text",
    destination: "experience-container",
    offset: 100,
  },
  {
    title: "Projects",
    path: "/",
    icon: <AiFillProject />,
    class: "nav-text",
    destination: "project-header",
    offset: 100,
  },
];
