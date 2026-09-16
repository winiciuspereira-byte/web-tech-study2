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

            {usuarios.map((usuario) => (

                <article className="content-usuarios" key={usuario.id}>
                    <strong>Nome: {usuario.nome}</strong>
                    <br />
                    <strong>Telefone: {usuario.telefone}</strong>
                    <br />
                    <button className="delete">Deletar</button>
                    <br />
                </article>

            ))}


        </section>
    )
}
