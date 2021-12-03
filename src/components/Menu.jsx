import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { handleLogout } from "../store/actions/authActions"

const Menu = ({auth, dispatch}) => {
  
  return (
    <nav>
      <ul>
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/" onClick={() => handleLogout(auth, dispatch)}>Logout</Link>
          </li>
        </>
      </ul>
    </nav>
  )
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth
})

export default  connect((mapStateToProps)) (Menu);
