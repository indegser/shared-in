import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("Home renders Home!", () => {
  // Given
  render(<Home />);

  // Then
  expect(screen.getByText("Home!")).toBeDefined();
});
