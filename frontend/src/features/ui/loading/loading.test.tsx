import React from "react";
import { render } from "@testing-library/react";
import Loading from "./loading";

describe("<Loading />", () => {
  it("should render <Loading /> without status", async () => {
    const { getByTestId, getByText } = render(<Loading status={null} />);
    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(getByTestId("notStatus")).toBeInTheDocument();
  });

  it("should render <Loading /> with idle status", async () => {
    const { getByTestId, getByText } = render(<Loading status={"idle"} />);
    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(getByTestId("idle")).toBeInTheDocument();
  });

  it("should render <Loading /> with loading status", async () => {
    const { getByTestId, getByText } = render(<Loading status={"loading"} />);
    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(getByTestId("idle")).toBeInTheDocument();
  });

  it("should render <Loading /> with failed status", async () => {
    const { getByTestId, getByText } = render(<Loading status={"failed"} />);
    expect(getByText(/Failed/i)).toBeInTheDocument();
    expect(getByTestId("failed")).toBeInTheDocument();
  });
});
