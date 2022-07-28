import React, { ReactNode } from "react";
import type { FCC } from "src/types/types";

interface Props {
  children: ReactNode;
}

const FormLayout: FCC<Props> = ({ children }: Props) => {
  return <div className="flex flex-col justify-center items-center">{children}</div>;
};

export default FormLayout;
