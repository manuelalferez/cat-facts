import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("test app", () => {
  const testMessage = "Hello world!";
  render(<App />);
  expect(screen.getByText(testMessage)).toBeInTheDocument();
});
