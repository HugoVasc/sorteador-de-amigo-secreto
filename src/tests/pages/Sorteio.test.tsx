import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { RecoilRoot } from "recoil";
import Sorteio from "../../pages/Sorteio/Sorteio";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio";

jest.mock("../../state/hooks/useListaDeParticipantes", () => {
  return { useListaDeParticipantes: jest.fn() };
});

jest.mock("../../state/hooks/useResultadoSorteio", () => {
  return { useResultadoSorteio: jest.fn() };
});

describe("Sorteio page", () => {
  const participantes = ["Carol", "Hugo", "Pedro"];
  const resultado = new Map([
    ["Carol", "Hugo"],
    ["Hugo", "Pedro"],
    ["Pedro", "Carol"],
  ]);
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
  });
  test("Should show the selected person to each participant", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );
    expect(screen.queryAllByRole("option")).toHaveLength(
      //Opcao default
      participantes.length + 1
    );
  });
  test("should show the selected secret friend", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );
    const select = screen.getByPlaceholderText("Selecione o seu nome");
    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const secretFriend = screen.getByRole("alert");
    expect(secretFriend).toBeInTheDocument();
  });
  test("Should hide the selected name after five seconds", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );
    const select = screen.getByPlaceholderText("Selecione o seu nome");
    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    let secretFriend = screen.queryByRole("alert");
    expect(secretFriend).toBeInTheDocument();
    act(() => {
      jest.runAllTimers();
    });
    secretFriend = screen.queryByRole("alert");
    expect(secretFriend).toBeNull();
  });
});
