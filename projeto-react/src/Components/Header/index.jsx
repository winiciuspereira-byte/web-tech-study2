import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Sabor & Cia</h1>
        </div>

        <nav className="menu">
          <a href="#inicio">Início</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <button className="header-button">
          Fazer pedido
        </button>
      </div>
    </header>
  );
}

export default Header;
