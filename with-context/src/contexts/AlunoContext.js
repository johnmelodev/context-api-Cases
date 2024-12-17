import { createContext, useState } from "react";

export const AlunoContext = createContext({});

function AlunoProvider({ children }) {
  const [alunos, setAlunos] = useState("Joao Melo");
  const [quantidadeAlunos, setQuantidadeAlunos] = useState(85);

  return (
    <AlunoContext.Provider value={{ alunos, setAlunos, quantidadeAlunos }}>
      {children}
    </AlunoContext.Provider>
  );
}

export default AlunoProvider;
