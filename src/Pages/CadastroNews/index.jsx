import { useEffect, useState } from 'react';
import './cadastroNews.css';

const API_URL = 'http://localhost:3000/cadastroNews';

export default function CadastroNews() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cadastros, setCadastros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [status, setStatus] = useState({ type: '', message: '' });

  const carregarCadastros = async () => {
    try {
      const resposta = await fetch(API_URL);

      if (!resposta.ok) {
        throw new Error('Não foi possível carregar os cadastros.');
      }

      const dados = await resposta.json();
      setCadastros(dados);
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarCadastros();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nomeTrim = nome.trim();
    const emailTrim = email.trim();

    if (!nomeTrim || !emailTrim) {
      setStatus({ type: 'error', message: 'Preencha nome e e-mail antes de enviar.' });
      return;
    }

    try {
      const resposta = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: nomeTrim, email: emailTrim }),
      });

      if (!resposta.ok) {
        throw new Error('Erro ao cadastrar o usuário.');
      }

      setNome('');
      setEmail('');
      setStatus({ type: 'success', message: 'Cadastro realizado com sucesso!' });
      await carregarCadastros();
    } catch (error) {
      setStatus({ type: 'error', message: error.message });
    }
  };

  return (
    <section className="cadastro-news">
      <header className="cadastro-header">
        <h1>Cadastro News</h1>
        <p>Cadastre-se para receber novidades e acompanhe os usuários registrados.</p>
      </header>

      <div className="cadastro-layout">
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <h2>Nova inscrição</h2>

          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
            />
          </div>

          <button type="submit" className="btn-submit">
            Cadastrar
          </button>

          {status.message && (
            <div className={`form-status ${status.type}`} role="status">
              {status.message}
            </div>
          )}
        </form>

        <aside className="cadastro-lista">
          <h2>Usuários cadastrados</h2>

          {carregando ? (
            <p>Carregando cadastros...</p>
          ) : cadastros.length > 0 ? (
            <ul className="lista-news">
              {cadastros.map((registro) => (
                <li key={registro.id}>
                  <strong>{registro.nome}</strong>
                  <span>{registro.email}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="empty-state">Nenhum cadastro encontrado.</p>
          )}
        </aside>
      </div>
    </section>
  );
}
