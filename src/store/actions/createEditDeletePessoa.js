import { api } from "../../services/api"
import getPessoa from "./getPessoa"

const handleCreatePessoa = async (user, dispatch) => {
  try {

    const { data } = await api.post('/pessoa', user)

    dispatch({
      type: "SET_PESSOA",
      data
    })

    alert('Cadastro realizado com sucesso!')
    window.location.href = '/pessoa'
    await getPessoa(dispatch)


  } catch {
    alert('Não foi possivel cadastrar pois existe um erro no cadastro')
  }

}

const handleGetEditPessoa = async (pessoa, id, dispatch) => {

  const pessoaEmEdicao = pessoa.find(p => p.idPessoa === id)
  console.log(pessoaEmEdicao)

  dispatch({
    type: "EDIT_PESSOA",
    pessoaEmEdicao,
    isEditing: true
  })

}

const handleSaveEditChanges = async (pessoa, idPessoa, dispatch) => {

  try {

    const { data } = await api.put(`/pessoa/${idPessoa}`, pessoa)
    console.log(data)

    dispatch({
      type: "SET_PESSOA",
      data
    })

    alert('Atualização de cadastro realizada com sucesso')
    window.location.href = '/pessoa'

  } catch {
    alert('Erro na atualização')
  }
}

const handleDeletePessoa = async (id, dispatch) => {

  try {
    const { data } = await api.delete(`/pessoa/${id}`)

    alert('Usuário deletado com sucesso')
    window.location.href = '/pessoa'
    
    getPessoa(dispatch)

    dispatch({
      type: "SET_PESSOA",
      data
    })
  } catch {
    alert('Deletou não')
  }
}



export { handleCreatePessoa, handleGetEditPessoa, handleDeletePessoa, handleSaveEditChanges };