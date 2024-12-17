import Nome from "../Nome";
import { AlunoContext } from "../../contexts/AlunoContext";
import { useContext } from "react";
function Alunos() {
  const { quantidadeAlunos } = useContext(AlunoContext);

  return (
    <div>
      <h2>
        Component Alunos: Quantidade total de alunos online {quantidadeAlunos}
      </h2>
      <Nome />
    </div>
  );
}

export default Alunos;
