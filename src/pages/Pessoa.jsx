import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { api } from '../services/api'
import { handleDeletePessoa, handleGetEditPessoa } from '../store/actions/createEditDeletePessoa'
import getPessoa from '../store/actions/getPessoa'
import styles from '../styles/pessoa.module.scss'

const Pessoa = ({ pessoa, dispatch }) => {

  const navigate = useNavigate()

  useEffect(() => {
    api.defaults.headers.common['Authorization'] = localStorage.getItem('token')
    getPessoa(dispatch)
  }, [])

  return (
    <div className={styles.pessoaContainer}>
      <h1>Listagem de pessoas</h1>

      <button onClick={() => navigate('/cadastro-pessoa')}>Novo Cadastro</button>

      <div className={styles.pessoaLista}>
        {pessoa.map(p => (
          <div className={styles.card} key={p.idPessoa}>
            <div>
              <h3>{p.nome}</h3>
              <p>Email: {p.email}</p>
              <p>CPF: {p.cpf}</p>
              <p>Data de Nascimento: {p.dataNascimento}</p>
            </div>
            <div className={styles.botoes}>
              <button  onClick={() => {handleGetEditPessoa(pessoa, p.idPessoa, dispatch); navigate('/cadastro-pessoa')}}>Editar</button>
              <button onClick={() => { handleDeletePessoa(p.idPessoa, dispatch); navigate('/pessoa') }}>Deletar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  pessoa: state.pessoaReducer.pessoa,
})

export default connect(mapStateToProps)(Pessoa)

