import { Formik, Field, Form } from 'formik';
import { connect } from 'react-redux';
import { handleLogin } from '../store/actions/authActions';
import styles from '../styles/login.module.scss'

const Login = ({auth, dispatch}) => {

  console.log(auth)
  return (
    <div className="container">
      <div className={styles.loginAria}>
        <Formik
          initialValues={{
            usuario: '',
            senha: '',
          }}
          onSubmit={(
            values,
            { setSubmitting }
          ) => {
            handleLogin(values, dispatch)
            setSubmitting(false);
          }}
        >
          <Form className={styles.loginFields}>
            <h2>Faça login:</h2>

            <label htmlFor="usuario">Usuario</label>
            <Field id="usuario" name="usuario" placeholder="John" />

            <label htmlFor="senha">Senha</label>
            <Field id="senha" name="senha" placeholder="*******" />

            <button type="submit">Entrar</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth
})

export default  connect((mapStateToProps)) (Login);