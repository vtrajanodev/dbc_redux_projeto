import { api } from "../../services/api"

const getPessoa = async (dispatch) => {
  const { data } = await api.get('/pessoa')

  if (data) {
    dispatch({
      type: "SET_PESSOA",
      pessoas: data.sort((p1, p2) => p1.idPessoa > p2.idPessoa ? 1 : -1)
    })
  }


}

export default getPessoa;