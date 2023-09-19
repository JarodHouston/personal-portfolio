import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "../SidebarData.js";
import { IconContext } from "react-icons";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  //   const scrollPage = ({ item }) => {
  //     const element = document.getElementById(item.destination);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //       window.scrollTo({
  //         top:
  //           element.getBoundingClientRect().top -
  //           document.body.getBoundingClientRect().top -
  //           80,
  //         left: 0,
  //         behavior: "smooth",
  //       });
  //     }
  //   };
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="nav-menu-container">
        <div className="navbar">
          <Link to="#" className="menu-bar">
            <FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle" onClick={showSidebar}>
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={item.class}
                  onClick={() => {
                    showSidebar();
                    // scrollPage(item);
                    const element = document.getElementById(item.destination);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                      window.scrollTo({
                        top:
                          element.getBoundingClientRect().top -
                          document.body.getBoundingClientRect().top -
                          item.offset,
                        left: 0,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </IconContext.Provider>
  );
}
