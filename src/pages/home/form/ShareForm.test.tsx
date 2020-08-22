import { render, screen } from "@testing-library/react";
import ShareForm from "./ShareForm";
import { authStoreApi } from "common/store";

describe("ShareForm", () => {
  it("sets default value using authStore", async () => {
    // Mock
    const mockUser = {
      team: "Team",
      company: "MockCompany",
    } as IUser;

    authStoreApi.setState({
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
});
