import { useEffect } from 'react'
import { connect } from 'react-redux'
import { api } from '../services/api'
import getPessoa from '../store/actions/getPessoa'
import styles from '../styles/pessoa.module.scss'

const Pessoa = ({ pessoa, dispatch }) => {

  useEffect(() => {
    api.defaults.headers.common['Authorization'] = localStorage.getItem('token')
    getPessoa(dispatch)
  }, [])

  console.log(pessoa)
  return (
    <div className={styles.pessoaContainer}>
      <h1>Listagem de pessoa</h1>

      <div className={styles.pessoaLista}>
        <ul>
          {pessoa.map(p => (
            <li key={p.id}>
              <div>
                <h3>{p.nome}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  pessoa: state.pessoaReducer.pessoa
})

export default connect(mapStateToProps)(Pessoa)

