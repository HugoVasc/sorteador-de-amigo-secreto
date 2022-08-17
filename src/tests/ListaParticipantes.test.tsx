import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ListaParticipantes from "../components/ListaParticipantes/ListaParticipantes";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

jest.mock("../state/hooks/useListaDeParticipantes", () => {
  return { useListaDeParticipantes: jest.fn() };
});

describe("ListaParticipantes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });
  test("should show an empty list of participants", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );
    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(0);
  });
});
describe("should show a list of participants with tow participants", () => {
  const participantes = ["carol", "ana"];
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });
  test("should show a list of participants with mocked participants", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );
    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(participantes.length);
  });
});
