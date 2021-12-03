import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import styles from '../styles/home.module.scss'

const Home = ({ auth, dispatch }) => {
  const navigate = useNavigate()

  return (
    <>
      <div className={styles.container}>
        <h1>Trabalhando com Redux ='(</h1>
        <p>A forma mais difícil de pegar um estado em outras telas desde 1990</p>
        <div className={styles.mainFlex}>
          <div>
            Dificil
          </div>
          <div>
            Complicado
          </div>
          <div>
            Porem funcional
          </div>
        </div>
      </div>
      {!auth.token ?
        <div className={styles.homeDuvida}>
          <p>Tu duvidas ?</p>
          <button onClick={() => navigate('/login')}>Faça login e veja :)</button>
        </div>
        :
        <div className={styles.homeDuvida}>
          <button onClick={() =>   navigate('/dashboard')}>Voltar para o site</button>
        </div>}
    </>
  )
}


const mapStateToProps = state => ({
  auth: state.authReducer.auth
})

export default connect(mapStateToProps)(Home)
