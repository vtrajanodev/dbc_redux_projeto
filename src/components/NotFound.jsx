import styles from '../styles/notfound.module.scss'
import logo from '../assets/404.png'
import { useNavigate } from 'react-router'
import { connect } from 'react-redux'

const NotFound = ({auth}) => {

  const navigate = useNavigate()

  const handleBackToPage = () => {
    if (auth) {
      navigate('/pessoa')
    } else {
      navigate('/login')
    }
  }

  console.log(auth)
  return (
    <div className={`${styles.notFound} container`}>
      <img src={logo} alt="not found" />
      <h1>Página não encontrada :(</h1>
      <div className={styles.row}>
        <p>Verifique a URL digitada</p>
        <button onClick={handleBackToPage}>Voltar para o site</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state => ({
  auth: state.authReducer.auth.auth
}))

export default connect(mapStateToProps)(NotFound);
