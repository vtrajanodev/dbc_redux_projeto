const INITIAL_STATE = {
  pessoa: {
    cpf: '',
    dataNascimento: '',
    email: '',
    idPessoa: 0,
    nome: ''
  }
}

const pessoaReducer = (state = INITIAL_STATE, action) => {

  if (action.type === 'SET_PESSOA') {
    return {
      pessoa: {
        cpf: '',
        dataNascimento: '',
        email: '',
        idPessoa: 0,
        nome: ''
      }
    }
  }

  return state
}

export default pessoaReducer;