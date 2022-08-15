import { atom } from "recoil";

export const listaParicipantesState = atom<string[]>({
  key: "listaParicipantesState",
  default: [],
});
