const usuarios = [
  { nome: 'Ana Silva', cargo: 'Desenvolvedora Front-end' },
  { nome: 'Bruno Costa', cargo: 'Designer UI/UX' },
  { nome: 'Carla Souza', cargo: 'Product Manager' },
];

export default function Usuarios() {
  return (
    <section>
      <h1>Usuários</h1>
      <div className="users-list">
        {usuarios.map((usuario) => (
          <div key={usuario.nome} className="user-card">
            <strong>{usuario.nome}</strong>
            <span>{usuario.cargo}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
