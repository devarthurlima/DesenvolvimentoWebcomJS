import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import "./Formulario.css";

function Formulario() {

  const nav = useNavigate()

  const [cadastro, setcadastro] = useState({
    nome: "",
    idade: 0,
    email: "",
    curso: "",
  });

  function handleChange(evento) {
    const { name, value } = evento.target;

    setcadastro({ ...cadastro, [name]: value });
  }

  function CadastraCliente(evento) {
    evento.preventDefault();

    nav("/clientes")

    console.log("funcionou");
  }

  return (
    <>
      <p>{cadastro.nome}</p>
      <p>{cadastro.idade}</p>
      <p>{cadastro.email}</p>
      <p>{cadastro.curso}</p>

      <form onSubmit={CadastraCliente}>
        <input
          type="text"
          name="nome"
          id="nomeId"
          onChange={handleChange}
          value={cadastro.nome}
        />
        <input
          type="number"
          name="idade"
          id=""
          onChange={handleChange}
          value={cadastro.idade}
        />
        <input
          type="email"
          name="email"
          id=""
          onChange={handleChange}
          value={cadastro.email}
        />
        <input
          type="text"
          name="curso"
          onChange={handleChange}
          value={cadastro.curso}
        />
        <button type="submit">enviar</button>
      </form>
    </>
  );
}

export default Formulario;
