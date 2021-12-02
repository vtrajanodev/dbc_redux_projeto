
import logo from '../assets/Spinner.svg'
import styles from '../styles/loading.module.scss'


export const Loading = () => {


  return (
    <>
      <div className={styles.loadingContainer}>
        <img src={logo} alt="loading..." />
      </div>
    </>
  )
}
