import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

// FormularioCadastro(props)
export default function FormularioCadastro({
  envioFormulario,
  validarCPF,
  validarNome,
}) {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const [erros, setErros] = useState(
    {
      nome: { valido: true, text: "" },
      cpf: { valido: true, text: "" },
    },
    {}
  );

  return (
    <form
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        envioFormulario({ nome, sobreNome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        value={nome}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(event) => setNome(event.target.value)}
        onBlur={() => {
          setErros({ ...erros, nome: validarNome(nome) });
        }}
      />

      <TextField
        value={sobreNome}
        onChange={(event) => setSobreNome(event.target.value)}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={cpf}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(event) => setCpf(event.target.value)}
        onBlur={() => {
          setErros({ ...erros, cpf: validarCPF(cpf) });
        }}
      />

      <FormControlLabel
        label="Promocoes"
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
        Cadastrar
      </Button>
    </form>
  );
}
