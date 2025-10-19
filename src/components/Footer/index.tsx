import './index.scss';

import IconLogo from '../../assets/icons/Logo.svg?url';
import IconFacebook from '../../assets/icons/IconFacebook.svg?url';
import IconInstagram from '../../assets/icons/IconInstagram.svg?url';
import IconLinkedin from '../../assets/icons/IconLinkedin.svg?url';

export function Footer() {
  return (
    <footer className="footer-wrapper">
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-text">
            <h3>Inscreva-se na nossa newsletter</h3>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos do econverse</p>
          </div>
          <form className="newsletter-form">
            <input type="text" placeholder="Digite seu nome" />
            <input type="email" placeholder="Digite seu e-mail" />
            <button type="submit">Inscrever</button>
          </form>
          <div className="newsletter-terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Aceito os termos e condições</label>
          </div>
        </div>
      </section>

      <section className="footer-links-section">
        <div className="container">
          <div className="footer-col footer-logo-col">
            <img src={IconLogo} alt="Logo Econverse" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="footer-social-icons">
              <img src={IconFacebook} alt="Facebook" />
              <img src={IconInstagram} alt="Instagram" />
              <img src={IconLinkedin} alt="LinkedIn" />
            </div>
          </div>

          <div className="footer-col">
            <h4>Institucional</h4>
            <ul>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Movimento</a></li>
              <li><a href="#">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Ajuda</h4>
            <ul>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Fale Conosco</a></li>
              <li><a href="#">Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Termos</h4>
            <ul>
              <li><a href="#">Termos e Condições</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Troca e Devolução</a></li>
            </ul>
          </div>
        </div>
      </section>

      <div className="footer-copyright">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}