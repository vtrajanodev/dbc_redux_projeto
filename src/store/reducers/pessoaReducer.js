const INITIAL_STATE = {
  pessoa: []
}

const pessoaReducer = (state = INITIAL_STATE, action) => {

  if (action.type === 'SET_PESSOA') {
    return {
      pessoa: action.data
    }
  }
  return state
}

export default pessoaReducer;