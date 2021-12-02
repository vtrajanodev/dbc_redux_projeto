import { useEffect } from "react"
import { Provider } from "react-redux"
import { Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import Login from "./pages/Login"
import { Pessoa } from "./pages/Pessoa"
import store from "./store"


export const LinkRoutes = (auth, dispatch) => {


  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          {/* <Header /> */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/pessoa" element={<Pessoa />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  )
}
