import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router'
import * as Yup from 'yup';
import styles from '../styles/cadastro.module.scss'


const Cadastro = () => {


  const navigate = useNavigate()

  const cadastroSchema = Yup.object().shape({
    nome: Yup.string()
      .min(5, 'Nome muito curto!')
      .max(50, 'Nome muito longo')
      .required('Obrigatório'),
    dataNascimento: Yup.string()
      .min(10, 'Data de nascimento incompleta')
      .max(10, 'Data de nascimento muito longa')
      .required('Obrigatório'),
    email: Yup.string()
      .email('Email invalido')
      .max(20, 'Email muito longo')
      .required('Obrigatório'),
    cpf: Yup.string()
      .min(11, 'CPF precisa conter 11 caracteres')
      .max(11, 'CPF precisa conter 11 caracteres')
      .required('Obrigatório')
  });

  return (
    <>  
      <div className={styles.cadastro}>

        <h1>Cadastro</h1>
        <Formik
          initialValues={{
            nome: '',
            dataNascimento: '',
            cpf: '',
            email: ''
          }}
          validationSchema={cadastroSchema}
          onSubmit={(
            values,
            { setSubmitting }
          ) => {
            setSubmitting(false);
          }}
        >
          {props => (
            <Form className={styles.cadastroContainer}>
              <div>
                <div>
                  <label htmlFor="nome">Nome</label>
                  <Field id="nome" name="nome" placeholder="John" />
                  {(props.errors.nome && props.touched.nome) && (
                    <span>{props.errors.nome}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="dataNascimento">Data de nascimento:</label>
                  <Field id="dataNascimento" name="dataNascimento" placeholder="1969-12-31" />
                  {(props.errors.nome && props.touched.dataNascimento) && (
                    <span>{props.errors.dataNascimento}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="cpf">CPF: </label>
                  <Field id="cpf" name="cpf" placeholder="19392848212" maxLength="11" minLength="11" />
                  {(props.errors.nome && props.touched.cpf) && (
                    <span>{props.errors.cpf}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="email">Email:</label>
                  <Field id="email" name="email" placeholder="email@exemplo.com" />
                  {(props.errors.nome && props.touched.email) && (
                    <span>{props.errors.email}</span>
                  )}
                </div>

                <div className={styles.botoes}>
                  <button type="button" onClick={() => navigate('/pessoa')}>Voltar</button>
                  <button type="submit">Cadastrar</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default Cadastro
