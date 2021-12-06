import { api } from "../../services/api"


const handleLogin = async (user, dispatch) => {
  const { data } = await api.post('/auth', user)
  const token = data
  
  
  if (token) {
    localStorage.setItem('token', token);
    
    api.defaults.headers.common['Authorization'] = token
    const logado = {
      type: 'SET_LOGIN',
      token: token,
      auth: true,
      loading: false,
    }
    dispatch(logado)
  } else {
    alert('Erro no token')
  }
}

const handleLogout = async (auth, dispatch) => {
  const deslogado = {
    type: 'SET_LOGOUT',
    token: localStorage.removeItem('token'),
    auth: false,
    loading: false
  }
  dispatch(deslogado)
}

export { handleLogin, handleLogout }