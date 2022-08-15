import { useSetRecoilState } from "recoil";
import { listaParicipantesState } from "../atom";

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParicipantesState);
  return (nomeDoParticipante: string) => {
    return setLista((listaAtual) => [...listaAtual, nomeDoParticipante]);
  };
};
