import { api } from "../../services/api"


export const handleLogin = async (user) => {

  const { data } = await api.post('/auth', user)
  const token = data
  localStorage.setItem('token', token)
  api.defaults.headers.common['Authorization'] = token
  console.log(token)

  return {
    type: 'SET_AUTH',
    user,
    token,
    auth: true
  }
}