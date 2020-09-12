import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShareForm from "./ShareForm";
import { useAuthStore } from "common/store";
import api from "common/api";

jest.mock("common/api");

describe("ShareForm", () => {
  it("sets default value using authStore", async () => {
    // Mock
    const mockUser = {
      team: "Team",
      company: "MockCompany",
    } as IUser;

    useAuthStore.setState({
      user: mockUser,
    });

    // Given
    render(<ShareForm />);

    // Then
    const teamInput = screen.getByTestId("team") as HTMLInputElement;
    const companyInput = screen.getByTestId("company") as HTMLInputElement;
    expect(teamInput.value).toBe(mockUser.team);
    expect(companyInput.value).toBe(mockUser.company);
  });

  it("calls updateUserBio when team is changed", async () => {
    // Mock
    const mockUser = { team: "A", company: "A" } as IUser;
    useAuthStore.setState({ user: mockUser });

    // Given
    render(<ShareForm />);

    // When
    userEvent.type(screen.getByTestId("team"), "{backspace}B");
    userEvent.click(screen.getByTestId("submit"));

    // Then
    await waitFor(() =>
      expect(api.updateUserBio).toHaveBeenCalledWith({
        team: "B",
        company: "A",
      })
    );
  });

  it("calls updateUserBio when company is changed", async () => {
    // Mock
    const mockUser = { team: "A", company: "A" } as IUser;
    useAuthStore.setState({ user: mockUser });

    // Given
    render(<ShareForm />);

    // When
    userEvent.type(screen.getByTestId("company"), "{backspace}B");
    userEvent.click(screen.getByTestId("submit"));

    // Then
    await waitFor(() =>
      expect(api.updateUserBio).toHaveBeenCalledWith({
        team: "A",
        company: "B",
      })
    );
  });
});
