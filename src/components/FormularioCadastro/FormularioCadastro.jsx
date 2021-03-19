import React from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

export default function FormularioCadastro() {
  return (
    <form action="">
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promocoes"
        control={
          <Switch name="promocoes" defaultChecked={true} color="primary" />
        }
      />

      <FormControlLabel
        label="novidades"
        control={
          <Switch name="novidades" defaultChecked={true} color="primary" />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
