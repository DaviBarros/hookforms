import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega( {aoEnviar} ){
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return(
        <form
        
          onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({ cep, endereco, numero, estado, cidade });
          }}       
        
        
        >
             <TextField name="cep" id="cep" label="CEP" type="number" variant="outlined" margin="dense"

                value={cep}
                onChange={(event) => {
                  setCep(event.target.value);
                }}

             />
             <TextField id="endereco" name="endereco" label="Endereço" type="text" variant="outlined" fullWidth margin="normal"

                value={endereco}
                onChange={(event) => {
                  setEndereco(event.target.value);
                }}

             />
             <TextField id="numero" name="numero" label="Número" type="number" variant="outlined"  margin="dense" 
             
                value={numero}
                onChange={(event) => {
                setNumero(event.target.value);
                }}
             
             /><br />
             <TextField id="estado" name="estado" label="Estado" type="text" variant="outlined" margin="dense" 
             
                value={estado}
                onChange={(event) => {
                setEstado(event.target.value);
                }}       
             
             /> <br />
             <TextField id="cidade" name="cidade" label="Cidade" type="text" variant="outlined" margin="normal" fullWidth
             
                value={cidade}
                onChange={(event) => {
                setCidade(event.target.value);
                }}
                
             /><br />
             <Button type="submit" variant="contained" fullWidth margin="normal" color="primary">Finalizar cadastro</Button>
        </form>
    );
}

export default DadosEntrega;