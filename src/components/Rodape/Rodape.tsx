import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../state/hooks/useListaDeParticipantes";
import { useSorteador } from "../../state/hooks/useSorteador";
import "./style.css";
const Rodape = () => {
  const participantes = useListaDeParticipantes();
  const navigate = useNavigate();
  const sortear = useSorteador();
  const handleSubmit = () => {
    navigate("/sorteio");
    sortear();
  };

  return (
    <footer className="rodape-configuracoes">
      <button
        className="botao"
        disabled={participantes.length < 3}
        onClick={handleSubmit}
      >
        Iniciar brincadeira
      </button>
      <img src="../../../public/images/sacolas.png" alt="Sacolas de compras" />
    </footer>
  );
};

export default Rodape;
