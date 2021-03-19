import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

export default function FormularioCadastro() {
  return (
    <form action="">
      <label htmlFor="nome">Nome</label>
      <input type="text" name="nome" id="nome" />

      <label htmlFor="sobrenome">Sobrenome</label>
      <input type="text" name="sobrenome" id="sobrenome" />

      <label htmlFor="cpf">CPF</label>
      <input type="text" name="cpf" id="cpf" />

      <label htmlFor="promo">Promocoes</label>
      <input type="text" name="promo" id="promo" />

      <label htmlFor="novidades">Novidades</label>
      <input type="checkbox" name="novidades" id="novidades" />

      {/* <button type="submit">Cadastrar</button> */}
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}
