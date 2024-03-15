import React, { useState } from 'react'

export default function CadastroAluno() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [rg, setRg] = useState('')
  const [telefone, setTelefone] = useState('')
  const [telefoneResponsavel, setTelefoneResponsavel] = useState('')
  const [data, setData] = useState('')
  const [nomeTurma, setNomeTurma] = useState('')

  function createUser(e) {
    e.preventDefault()
    console.log({
      name: nome,
      email: email,
      cpf: cpf,
      rg: rg,
      telephone: telefone,
      responsibleTelephone: telefone,
      date: data,
      nameClass: nomeTurma,
    })
    alert('Aluno cadastrado com susseco')
  }

  return (
    <div className="containerForm">
      <div className="divForm">
        <h1>Cadastro de aluno</h1>

        <form onSubmit={createUser} className="form">
          <label>nome:</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(event) => {
              setNome(event.target.value)
            }}
            required
          />
          <label>email:</label>
          <input
            type="email"
            placeholder="Digite su email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
            required
          />
          <label>cpf:</label>
          <input
            type="text"
            placeholder="Digite seu cpf"
            value={cpf}
            onChange={(event) => {
              setCpf(event.target.value)
            }}
            required
          />
          <label>rg:</label>
          <input
            type="text"
            placeholder="Digite seu rg"
            value={rg}
            onChange={(event) => {
              setRg(event.target.value)
            }}
            required
          />
          <label>telefone:</label>
          <input
            type="number"
            placeholder="Digite seu telefone"
            value={telefone}
            onChange={(event) => {
              setTelefone(event.target.value)
            }}
            required
          />
          <label>telefone do responsavel:</label>
          <input
            type="number"
            placeholder="Digite o telefone do responsavel"
            value={telefoneResponsavel}
            onChange={(event) => {
              setTelefoneResponsavel(event.target.value)
            }}
            required
          />
          <label>data de nascimento:</label>
          <input
            type="date"
            value={data}
            onChange={(event) => {
              setData(event.target.value)
            }}
            required
          />
          <select
            name=""
            id=""
            value={nomeTurma}
            onChange={(event) => {
              setNomeTurma(event.target.value)
            }}
          >
            <option value={null}>selecione a turma</option>
            <option>desenvolvimento de sistemas</option>
          </select>
          <div className="buttonDiv">
            <button type="submit" className="buttonForm">
              cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
