import React from "react";
import { validarCPF, validarSenha } from "../models/cadastro";

const ValidacoesCadastro = React.createContext({
  cpf: validarCPF,
  senha: validarSenha,
  nome: (nome) => {
    if (nome.length < 4 || nome.length > 72) {
      return { valido: false, texto: "Nome deve ter entre 4 e 72 dígitos" };
    }
    return { valido: true, texto: "" };
  },
});

export default ValidacoesCadastro;
