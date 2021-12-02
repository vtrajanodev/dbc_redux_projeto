

export const Card = ({ styles, listaPessoa, handleEditUser, handleDeleteUser}) => {


  return (
    <div className={styles.pessoaContainer}>
      <h1>Dados dos usuários</h1>
      <div className={styles.pessoaLista}>
        {listaPessoa.map(pessoa => (
          <div className={styles.card} key={pessoa.idPessoa}>
            <div>
              <h3>{pessoa.nome}</h3>
              <p>Nascimento: {pessoa.dataNascimento}</p>
              <p>Email: {pessoa.email}</p>
              <p>Doc: {pessoa.cpf}</p>
            </div>
            <div className={styles.botoes}>
              <button onClick={() => handleEditUser(pessoa.idPessoa)}>Editar</button>
              <button onClick={() => handleDeleteUser(pessoa.idPessoa)}>Deletar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}