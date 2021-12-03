import { api } from "../../services/api"


const getPessoa = async (dispatch) => {
  const { data } = await api.get('/pessoa')

  dispatch({
    type: "SET_PESSOA",
    data
  })
}

export default getPessoa;