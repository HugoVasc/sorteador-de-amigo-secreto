import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Rodape from "../components/Rodape/Rodape";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
jest.mock("../state/hooks/useListaDeParticipantes", () => {
  return { useListaDeParticipantes: jest.fn() };
});
describe("Should test the footer", () => {
  beforeEach(() => {
    const participantes: string[] = [];
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });
  test("should disable the footer button when there are less than three participants", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
describe("should play the game", () => {
  beforeEach(() => {
    const participantes: string[] = ["carol", "ana", "lucas"];
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });
  test("should redirect the user and start the game", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
