import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/dashboard.module.scss'

const Dashboard = () => {

  const [category, setCategory] = useState('cadastros')

  return (
    <div className={styles.dashboardContainer}>
      <h1>Dashboard</h1>

      <div className={styles.dashboard}>
        <h2>O que desejas fazer ?</h2>
        <div className={styles.buttonsCategory}>
          <button className={category === 'cadastros' ? styles.selected : ''} onClick={() => setCategory('cadastros')}>Cadastros</button>
          <button className={category === 'listagens' ? styles.selected : ''} onClick={() => setCategory('listagens')} >Listagens</button>
        </div>
        <div className={styles.dashboardMainFlex}>
          {category === 'cadastros' && (
            <>
              <Link to="/cadastro-pessoa">
                <div>
                  Cadastrar pessoa
                </div>
              </Link>

              <Link to="/cadastro-endereco">
                <div>
                  Cadastrar endereço
                </div>
              </Link>
            </>
          )}

          {category === 'listagens' && (
            <>
              <Link to="/pessoa">
                <div>
                  Listar pessoas
                </div>
              </Link>

              <Link to="/endereco">
                <div>
                  Listar endereços
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
