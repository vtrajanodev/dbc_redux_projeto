import { Link, useResolvedPath, useMatch } from "react-router-dom"
import Menu from "./Menu"
import logo from '../assets/github1.png'
import styles from '../styles/header.module.scss'
import { connect } from "react-redux"

const Header = ({ auth, dispatch }) => {

  let resolved = useResolvedPath('/')
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <>
      {(auth.token && !match) &&
        <header className={styles.headerFlex}>
          <Link to="/login">
            <img src={logo} alt="logo icon" />
          </Link>
          <Menu />
        </header>}
    </>
  )
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth
})

export default connect(mapStateToProps)(Header)
