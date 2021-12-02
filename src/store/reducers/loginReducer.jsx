const INITIAL_STATE = {
  auth: false,
  token: ''
}

const loginReducer = (state = INITIAL_STATE, action) => {

  if (action.type === 'SET_AUTH') {

    console.log(state)
    
    return {
      ...state,
      auth: true,
      token: state.token
    }
  }

  return {
    state
  }
}

export default loginReducer;