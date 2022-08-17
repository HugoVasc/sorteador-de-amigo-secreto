import { useRecoilValue } from "recoil";
import { listaParicipantesState } from "../atom";

export const useListaDeParticipantes = () => {
  return useRecoilValue(listaParicipantesState);
};
