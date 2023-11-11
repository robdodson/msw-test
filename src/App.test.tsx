import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("call fetch and render the message", async () => {
  const fetchSpy = jest.spyOn(window, "fetch");
  render(<App />);
  expect(await screen.findByText("Message received")).toBeInTheDocument();
  expect(fetchSpy).toHaveBeenCalledWith("/api/message");
});
