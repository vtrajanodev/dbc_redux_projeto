import { Formik, Form, Field } from 'formik'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router'
import * as Yup from 'yup';
import { api } from '../services/api';
import { handleCreatePessoa, handleSaveEditChanges } from '../store/actions/createEditDeletePessoa';
import styles from '../styles/cadastro.module.scss'


const Cadastro = ({ isEditing, pessoaEmEdicao, dispatch }) => {

  useEffect(() => {
    api.defaults.headers.common['Authorization'] = localStorage.getItem('token')
  }, [])

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
        <h1>{isEditing ? 'Atualização de cadastro' : 'Cadastro'}</h1>
        <Formik
          initialValues={{
            nome: isEditing ? pessoaEmEdicao.nome : '',
            dataNascimento: isEditing ? pessoaEmEdicao.dataNascimento : '',
            cpf: isEditing ? pessoaEmEdicao.cpf : '',
            email: isEditing ? pessoaEmEdicao.email : ''
          }}
          validationSchema={cadastroSchema}
          onSubmit={async (
            values,
            { setSubmitting }
          ) => {
            !isEditing ? 
            await handleCreatePessoa(values, dispatch)
            :
            await handleSaveEditChanges(values, pessoaEmEdicao.idPessoa, dispatch)
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
                  <button type="submit">{isEditing ? 'Atualizar cadastro' : 'Cadastrar'}</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

const mapStateToProps = (state => ({
  pessoa: state.pessoaReducer.pessoa,
  pessoaEmEdicao: state.pessoaReducer.pessoaEmEdicao,
  isEditing: state.pessoaReducer.isEditing
}))

export default connect(mapStateToProps)(Cadastro)
