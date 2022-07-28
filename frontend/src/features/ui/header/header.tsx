import React, { VFC } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { jwt } from "src/constants";

const Header: VFC = () => {
  return (
    <nav className="relative flex items-center justify-between w-full py-2 bg-white shadow-md navbar navbar-expand-lg">
      <div className="flex flex-wrap items-center justify-between w-full px-6">
        <div className="flex items-center">
          <Link
            to={"/"}
            className="flex items-center justify-center font-medium text-gray-900 uppercase title-font "
          >
            <FontAwesomeIcon
              className="w-6 h-6 p-2 text-white bg-blue-600 rounded-full"
              icon={faBrain}
            />
            <span className="ml-2 text-xl text-black hidden sm:block">dopamine manager</span>
          </Link>
        </div>

        <div className="flex items-center lg:ml-auto">
          {jwt ? (
            <Link to={"/dashboard"}>
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Dashboard
              </button>
            </Link>
          ) : (
            <>
              <Link to={"/login"}>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Login
                </button>
              </Link>
              <Link to={"/sign-up"}>
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign up for free
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
