import { atom } from "recoil";

export const listaParicipantesState = atom<string[]>({
  key: "listaParicipantesState",
  default: [],
});

export const erroState = atom<string>({
  key: "erroState",
  default: "",
});
