import React from "react";
import { render, screen, act } from "@testing-library/react";
import HomeForm from "./HomeForm";
import { authStoreApi } from "common/store";

jest.mock("common/modules/firebase.ts", () => ({
  auth: () => {},
  db: () => {},
}));

describe("HomeForm", () => {
  it("renders ConnectGithub when user is null", async () => {
    // Given
    render(<HomeForm />);

    // When
    const { updateStatus } = authStoreApi.getState();
    act(() => updateStatus(null));

    // Then
    await screen.findByTestId("sign-in-with-github");
  });

  it("renders ShareForm when user is authenticated", async () => {
    // Given
    render(<HomeForm />);

    // When
    const { updateStatus } = authStoreApi.getState();
    act(() => updateStatus({ uid: 1 } as any));

    // Then
    await screen.findByTestId("share-form");
  });
});
