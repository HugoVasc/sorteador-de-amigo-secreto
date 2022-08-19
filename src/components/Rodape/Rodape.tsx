import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";

const Rodape = () => {
  const participantes = useListaDeParticipantes();
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/sorteio");
  };

  return (
    <footer>
      <button disabled={participantes.length < 3} onClick={handleSubmit}>
        Iniciar brincadeira
      </button>
    </footer>
  );
};

export default Rodape;
