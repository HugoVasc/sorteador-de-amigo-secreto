import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

const ListaParicipantes = () => {
  const participantes: string[] = useListaDeParticipantes();
  return (
    <ul>
      {participantes.map((participante) => (
        <li key={participante}>{participante}</li>
      ))}
    </ul>
  );
};

export default ListaParicipantes;
