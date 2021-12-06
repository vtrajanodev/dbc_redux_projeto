const INITIAL_STATE = {
  pessoa: [],
  pessoaEmEdicao: {},
  isEditing: false
}

const pessoaReducer = (state = INITIAL_STATE, action) => {

  
  if (action.type === 'SET_PESSOA') {
    return {
      pessoa: action.pessoas
    }
  }
  
  if (action.type === 'EDIT_PESSOA') {
    return {
      pessoaEmEdicao: action.pessoaEmEdicao,
      isEditing: action.isEditing
    }
  }
  return state
}

export default pessoaReducer;