import React, { useState, useContext } from 'react';
import { Button, TextField } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacaoCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);     

    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }            
        }}>
            <TextField id="email" name="email" label="E-mail" type="email" variant="outlined" fullWidth margin="normal" required
                value={email} onChange={(event => setEmail(event.target.value))}
                
            />
            <TextField id="senha" name="senha" label="Senha" type="password" variant="outlined" fullWidth margin="normal" 
                  value={senha} onChange={(event => setSenha(event.target.value))}
                  onBlur={ validarCampos } error={ !erros.senha.valido } helperText={ erros.senha.texto }
            required/>
            <Button type="submit" variant="contained" fullWidth margin="normal" color="primary">Pŕoximo</Button>
        </form>
    );
}


export default DadosUsuario;