O objetivo desta aula é demonstrar por que o Context API do React é importante e quando devemos utilizá-lo. A ideia é começar com uma abordagem sem contexto, utilizando apenas propriedades (props) para compartilhar dados entre componentes.

Estrutura do Código:
App.js:

Gerencia o estado global do nome usando useState.
Passa o estado nomeAluno e a função setNomeAluno como propriedades para o componente <Alunos>.
Alunos/index.js:

Recebe as props nome e mudaNome.
Renderiza o componente <Nome> e repassa as mesmas props para ele.
Nome/index.js:

Exibe o nome atual do aluno recebido via props.
Contém um botão que, ao ser clicado, chama mudaNome para alterar o nome no estado global do componente App.
Explicação Técnica:
Props Drilling: Neste exemplo, as props nome e mudaNome são repassadas de App → Alunos → Nome. Esse processo é conhecido como "props drilling" e funciona bem para pequenas aplicações.
Motivação para Context API: Se tivermos muitos componentes em uma aplicação grande, passar props por vários níveis de componentes pode se tornar complicado e difícil de manter. O Context API permite evitar props drilling, fornecendo um método centralizado para gerenciar e distribuir dados entre componentes.
Resultado do Código:
Estado Inicial:
Nome exibido: "João" (ou qualquer valor inicial).
Ao Clicar no Botão:
A função mudaNome é chamada com o valor "Sujeito Programador".
O estado é atualizado no App, e o componente <Nome> é re-renderizado com o novo nome.
