import React from "react";
import { validarCPF, validarNome, validarSenha } from "../models/cadastro";

const ValidacoesCadastro = React.createContext({
  cpf: validarCPF,
  senha: validarSenha,
  nome: validarNome,
});

export default ValidacoesCadastro;
