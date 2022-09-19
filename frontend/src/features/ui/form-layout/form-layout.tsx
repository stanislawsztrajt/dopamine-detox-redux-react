import React, { ReactNode } from "react";
import type { FCC } from "src/utils/types/types";

interface Props {
  children: ReactNode;
}

const FormLayout: FCC<Props> = ({ children }: Props) => {
  return <div className="flex flex-col items-center justify-center">{children}</div>;
};

export default FormLayout;
