import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from "../../hooks/useErros";

export default function DadosUsuario({ aoEnviar }) {
  // as validacoes sao configuradas dentro do contexto de cadastro
  // conforme pode ser visto no próprio arquivo.
  const validacoes = useContext(ValidacoesCadastro);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // usando hook customizado
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        id="email"
        name="email"
        label="E-mail"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <TextField
        id="senha"
        name="senha"
        label="Senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={senha}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        onChange={(event) => setSenha(event.target.value)}
        onBlur={validarCampos}
      />
      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}
