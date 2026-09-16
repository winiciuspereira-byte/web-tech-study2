import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>Sabor & Cia</h2>
          <p>
            Sabor, qualidade e praticidade para o seu dia.
          </p>
        </div>

        <div className="footer-section">
          <h3>Links</h3>
          <a href="#inicio">Início</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#sobre">Sobre nós</a>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <p>contato@saborecia.com</p>
          <p>(11) 99999-9999</p>
        </div>

        <div className="footer-section">
          <h3>Redes sociais</h3>
          <div className="socials">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Sabor & Cia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
