import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

import { Container, Typography } from "@material-ui/core";

import "./App.css";
import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro
        envioFormulario={aoEnviarForm}
        validarCPF={validarCPF}
        validarNome={validarNome}
      />
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarNome(nome) {
  if (nome.length < 3) {
    return { valido: false, texto: "Nome deve ter no mínimo 3 dígitos" };
  }
  return { valido: true, texto: "" };
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos" };
  }
  return { valido: true, texto: "" };
}

export default App;
