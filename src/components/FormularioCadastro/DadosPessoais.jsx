import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/validacoesCadastro";

// FormularioCadastro(props)
export default function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const [erros, setErros] = useState(
    {
      cpf: { valido: true, text: "" },
      nome: { valido: true, text: "" },
    },
    {}
  );

  const validacoes = useContext(ValidacoesCadastro);

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
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobreNome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={nome}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        onChange={(event) => setNome(event.target.value)}
        onBlur={validarCampos}
      />

      <TextField
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={sobreNome}
        onChange={(event) => setSobreNome(event.target.value)}
      />

      <TextField
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
        value={cpf}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        onChange={(event) => setCpf(event.target.value)}
        onBlur={validarCampos}
      />

      <FormControlLabel
        label="Promocoes"
        name="promocoes"
        control={
          <Switch
            name="promocoes"
            checked={promocoes}
            color="primary"
            onChange={(event) => setPromocoes(event.target.checked)}
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        name="novidades"
        control={
          <Switch
            name="novidades"
            checked={novidades}
            color="primary"
            onChange={(event) => setNovidades(event.target.checked)}
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Proximo
      </Button>
    </form>
  );
}
