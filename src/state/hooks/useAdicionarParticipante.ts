import { useRecoilValue, useSetRecoilState } from "recoil";
import { erroState, listaParicipantesState } from "../atom";

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParicipantesState);
  const lista = useRecoilValue(listaParicipantesState);
  const setErro = useSetRecoilState(erroState);
  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
      setErro("Nomes duplicados nao sao permitidos!");
      setTimeout(() => {
        setErro("");
      }, 5000);
      return;
    }
    return setLista((listaAtual) => [...listaAtual, nomeDoParticipante]);
  };
};
