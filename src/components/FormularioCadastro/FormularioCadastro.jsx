import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

export default function FormularioCadastro() {
  return (
    <form action="">
      <TextField id="nome" label="Nome" variant="outlined" fullWidth />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
      />

      <TextField id="cpf" label="CPF" variant="outlined" fullWidth />

      <TextField id="promo" label="Promo" variant="outlined" fullWidth />

      <label htmlFor="novidades">Novidades</label>
      <input type="checkbox" name="novidades" id="novidades" />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
