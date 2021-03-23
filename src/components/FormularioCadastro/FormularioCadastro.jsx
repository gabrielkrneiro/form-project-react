import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";

// FormularioCadastro(props)
export default function FormularioCadastro({ envioFormulario, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function formularioAtual(etapaAtual) {
    switch (etapaAtual) {
      case 0:
        return <DadosUsuario />;
      case 1:
        return (
          <DadosPessoais
            envioFormulario={envioFormulario}
            validarCPF={validarCPF}
          />
        );
      case 2:
        return <DadosEntrega />;
      default:
        return <Typography>Erro</Typography>;
    }
  }

  return <>{formularioAtual(etapaAtual)}</>;
}
