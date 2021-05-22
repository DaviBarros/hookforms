function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve ter 11 digitos."}
    }else{
      return {valido:true, texto:""}
    }
  }


  function validarSenha(senha){
    if(senha.length < 4 || senha.length > 10){
      return {valido:false, texto:"O campo deve ter entre 4 e 10 digitos."}
    }else{
      return {valido:true, texto:""}
    }
  }

  export {validarCPF, validarSenha};