import { Formik, Field, Form } from 'formik';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginActions from '../store/actions/loginReducer'
import styles from '../styles/login.module.scss'

const Login = () => {

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
            console.log(values)
            LoginActions.handleLogin(values)
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
  auth: state.loginReducer.auth
})

const mapDispatchToProps = dispatch => (
  bindActionCreators(LoginActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Login)