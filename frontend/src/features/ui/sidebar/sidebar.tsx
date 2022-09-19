import React, { VFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBrain,
  faCirclePlus,
  faCircleQuestion,
  faGear,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { logout } from "src/utils/helpers";

const Sidebar: VFC = () => {
  const location = useLocation();

  const links = [
    { name: "dashboard", icon: faUserAstronaut, link: "/dashboard" },
    { name: "start managing", icon: faCirclePlus, link: "/dashboard/start-dopamine-management" },
    { name: "settings", icon: faGear, link: "/dashboard/settings" },
    { name: "about", icon: faCircleQuestion, link: "/about" },
  ];

  const linksMap = links.map(({ name, icon, link }) => {
    return (
      <Link to={link} key={name}>
        <div
          className={`${
            location.pathname === link ? "text-strong-text" : "text-secondary-text"
          } mt-4 text-base hover:text-strong-text duration-150 cursor-pointer`}
        >
          <span className="text-2xl">
            <FontAwesomeIcon icon={icon} />
          </span>
          <span className="ml-2">{name}</span>
        </div>
      </Link>
    );
  });

  return (
    <nav className="fixed flex flex-col items-center w-1/6 h-screen p-4 uppercase bg-zinc-800">
      <Link to={"/"} className="text-xl text-strong-text">
        <FontAwesomeIcon icon={faBrain} />
        <span className="ml-1 text-secondary-text">Dopamine manager</span>
      </Link>
      <div className="w-full mt-4 border-b"></div>
      <div className="p-4 text-lg font-light uppercase opacity-80">
        {linksMap}
        <div
          onClick={logout}
          className="mt-4 text-base duration-150 cursor-pointer text-secondary-text hover:text-strong-text"
        >
          <span className="text-2xl">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </span>
          <span className="ml-2">Logout</span>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
