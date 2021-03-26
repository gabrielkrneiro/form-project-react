import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function DadosUsuario({ aoEnviar, validacoes }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erros, setErros] = useState({
    senha: { valido: true, text: "" },
  });

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros }; // para validacao dinamica eh necessario realizar copia do estado
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

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
