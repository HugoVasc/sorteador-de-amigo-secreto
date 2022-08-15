import React from "react";
import { render, screen } from "@testing-library/react";
import Formulario from "./Formulario";

test("When input is empty, submit button should be disabled", () => {
  render(<Formulario />);
  const input = screen.getByPlaceholderText(
    "Insira os nomes dos participantes"
  );
  expect(input).toBeInTheDocument();
  const button = screen.getByRole("button");
  expect(button).toBeDisabled();
});
