import React, { FC } from "react";
import { Header } from "src/features/ui";
import { Link } from "react-router-dom";
import UndrawBeforeDawn from "src/images/undraw_before_dawn.svg";
import { jwt } from "src/constants";

const Index: FC = () => {
  return (
    <main data-testid="home">
      <div>
        <section className="mb-40">
          <Header />
          <div className="px-6 py-12 lg:mt-32 text-center text-gray-800 md:px-12 lg:text-left">
            <div className="container mx-auto xl:px-32">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div data-aos="fade-right" className="mt-12 lg:mt-0">
                  <h1 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                    Do a dopamine detox
                    <br />
                    <span className="text-blue-600">think better and feel better</span>
                  </h1>
                  <Link
                    to={jwt ? "/dashboard" : "/sign-up"}
                    className="inline-block py-3 mr-2 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    role="button"
                  >
                    {jwt ? "Dashboard" : "Sign up for free"}
                  </Link>
                  <Link
                    to={"/about"}
                    className="inline-block py-3 text-sm font-medium leading-snug text-blue-600 uppercase transition duration-150 ease-in-out bg-transparent rounded px-7 hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    role="button"
                  >
                    Learn more
                  </Link>
                </div>
                <div data-aos="fade-left" className="mb-12 lg:mb-0">
                  <img src={UndrawBeforeDawn} className="rounded-lg" alt="chilling image" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Index;
