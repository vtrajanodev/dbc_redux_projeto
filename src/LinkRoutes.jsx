import { useEffect } from "react"
import { connect } from "react-redux"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import Login from "./pages/Login"
import { Pessoa } from "./pages/Pessoa"


const LinkRoutes = ({ auth, dispatch }) => {

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
     
      const logado = {
        type: 'SET_LOGIN',
        token: localStorage.getItem('token'),
        auth: true,
        loading: false
      }
      dispatch(logado)
    } else {
      alert('Erro no token')
    }
  }, [])


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/pessoa" element={<Pessoa />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth
})

export default connect(mapStateToProps)(LinkRoutes)
