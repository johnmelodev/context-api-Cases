import { useContext } from "react";

import { AlunoContext } from "../../contexts/AlunoContext";

function Nome() {
  const { alunos, setAlunos } = useContext(AlunoContext);

  return (
    <div>
      <span style={{ color: "#FF0000" }}>Bem vindo: {alunos} </span>
      <br />
      <button onClick={() => setAlunos("Thiago")}>Trocar nome</button>
    </div>
  );
}

export default Nome;
