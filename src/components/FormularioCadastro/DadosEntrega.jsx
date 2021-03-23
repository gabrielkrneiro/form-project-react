import { Button, TextField } from "@material-ui/core";
import React from "react";

const DadosEntrega = () => (
  <form action="">
    <TextField
      id="cep"
      label="CEP"
      type="number"
      variant="outlined"
      margin="normal"
    />

    <TextField
      id="endereco"
      label="Endereco"
      type="text"
      variant="outlined"
      margin="normal"
      fullWidth
    />

    <TextField
      id="numero"
      label="Numero"
      type="number"
      variant="outlined"
      margin="normal"
    />

    <TextField
      id="estado"
      label="Estado"
      type="text"
      variant="outlined"
      margin="normal"
    />

    <TextField
      id="cidade"
      label="Cidade"
      type="text"
      variant="outlined"
      margin="normal"
    />

    <Button type="submit" variant="contained" color="primary" fullWidth>
      Finalizar cadastro
    </Button>
  </form>
);

export default DadosEntrega;
