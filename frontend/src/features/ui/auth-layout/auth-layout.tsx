import React, { ReactNode } from "react";
import type { FCC } from "src/types/types";
import UndrawBrainstorming from "src/images/undraw_brainstorming.svg";

interface Props {
  children: ReactNode;
}

const AuthLayout: FCC<Props> = ({ children }: Props) => {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="h-full gradient-form md:h-screen">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">{children}</div>
                  </div>
                  <div className="lg:w-6/12 bg-blue-500 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <img src={UndrawBrainstorming} className="" alt="" />
                      <div className="mt-4">
                        <h4 className="text-xl font-semibold mb-6">Help yourself and your head</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
