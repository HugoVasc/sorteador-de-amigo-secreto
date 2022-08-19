import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Config from "../../pages/Config";

const mockNavegacao = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});

describe("config page", () => {
  test("should render", () => {
    const { container } = render(
      <RecoilRoot>
        <Config />
      </RecoilRoot>
    );
    expect(container).toMatchSnapshot();
  });
});
