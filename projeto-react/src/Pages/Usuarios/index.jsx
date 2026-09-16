import { useState } from "react"

export default function index() {
  const [usuarios, setUsuarios] = useState([]);

  userEffect(() => {
    fetch("http://localhost:3000/usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error(error));
  }, [])
  return (
    <section className="container-usuarios">
        <h1>Lista de Usuários</h1>

        <article className="usuarios">
            <strong>Nome: Caio</strong>
               <br />
            <strong>Telefone: (11) 99999-9999</strong>
            <br />
            <button className="delete">Deletar</button>
            <br />
        </article>
    </section>
  )
}
