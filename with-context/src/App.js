import { useState } from "react";
import Alunos from "./components/Alunos";

import AlunoProvider from "./contexts/AlunoContext";

function App() {
  return (
    <AlunoProvider>
      <div>
        <h1>ESCOLA</h1>
        <hr />
        <Alunos />
      </div>
    </AlunoProvider>
  );
}

export default App;
