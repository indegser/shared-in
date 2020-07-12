import { render, screen, act } from "@testing-library/react";
import ShareForm from "./ShareForm";
import { renderHook } from "@testing-library/react-hooks";
import { authStoreApi } from "common/store";
import { useShareForm } from "./ShareForm.hooks";

jest.mock("common/modules/firebase.ts", () => ({
  auth: () => {},
  db: () => {},
}));

describe("ShareForm", () => {
  it("sets default value using authStore", async () => {
    // Given
    authStoreApi.setState({
      user: {
        uid: "1",
        displayName: "user",
        email: "user@gmail.com",
        team: "B",
        company: "A",
      },
    });

    render(<ShareForm />);

    const team = await screen.findByLabelText("Team");
    expect((team as HTMLInputElement).value).toBe(
      authStoreApi.getState().user.team
    );

    const company = await screen.findByLabelText("Company");
    expect((company as HTMLInputElement).value).toBe(
      authStoreApi.getState().user.company
    );
  });
});
