import React, { ReactNode } from "react";
// import Footer from "../footer";
import Sidebar from "../sidebar";
import type { FCC } from "src/types/types";

interface Props {
  children: ReactNode;
}

const Layout: FCC<Props> = ({ children }: Props) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="w-5/6">{children}</div>
    </div>
  );
};

export default Layout;
