import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Formulario from "../components/Formulario/Formulario";
import { RecoilRoot } from "recoil";

describe("comportamento do Formulario.tsx", () => {
  test("When input is empty, submit button should be disabled", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    //encontra no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //garante que o input esteja no documento
    expect(input).toBeInTheDocument();
    //Encontra o botao
    const button = screen.getByRole("button");
    //garante que o botao esteja desabilitado
    expect(button).toBeDisabled();
  });

  test("Add a participant if there is a name into the input field", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    //encontra no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //Encontra o botao
    const button = screen.getByRole("button");
    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Carolina Silva",
      },
    });
    //clicar no botao submeter
    fireEvent.click(button);
    //garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();
    //garantir que o input nao tenha valor
    expect(input).toHaveValue("");
  });

  test("should not add a duplicated name into the list", () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    //encontra no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //Encontra o botao
    const button = screen.getByRole("button");
    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Carolina Silva",
      },
    });
    //clicar no botao submeter
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "Carolina Silva",
      },
    });
    fireEvent.click(button);

    const mensagemDeErro = screen.getByRole("alert");
    expect(mensagemDeErro.textContent).toBe(
      "Nomes duplicados nao sao permitidos!"
    );
  });

  test("error alert should disappear after timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    //encontra no DOM o input
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    //Encontra o botao
    const button = screen.getByRole("button");
    //inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: "Carolina Silva",
      },
    });
    //clicar no botao submeter
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "Carolina Silva",
      },
    });
    fireEvent.click(button);

    let mensagemDeErro = screen.queryByRole("alert");
    expect(mensagemDeErro).toBeInTheDocument();
    act(() => {
      jest.runAllTimers();
    });
    mensagemDeErro = screen.queryByRole("alert"); // Se usa o query quando e possivel nao encontrar o esperado
    expect(mensagemDeErro).toBeNull();
  });
});
