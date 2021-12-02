import { Link } from "react-router-dom"


export const Menu = () => {
  
  return (
    <nav>
      <ul>
        <>
          <li>
            <Link to="/"> Cadastro</Link>
          </li>
          <li>
            <Link to="/pessoa">Pessoa</Link>
          </li>
          <li>
            <Link to="/endereco">Endereço</Link>
          </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </>
      </ul>
    </nav>
  )
}
