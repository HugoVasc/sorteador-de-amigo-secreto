import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Sorteio from "../../pages/Sorteio";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

jest.mock("../../state/hooks/useListaDeParticipantes", () => {
  return { useListaDeParticipantes: jest.fn() };
});

describe("Sorteio page", () => {
  const participantes = ["Carol", "Hugo", "Pedro"];
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });
  test("Should show the selected person to each participant", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );
    expect(screen.queryAllByRole("option")).toHaveLength(participantes.length);
  });
});
