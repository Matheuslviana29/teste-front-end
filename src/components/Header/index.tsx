import { useState, useEffect } from 'react';
import './index.scss';
import IconShieldCheck from '../../assets/icons/ShieldCheck.svg?react';
import IconTruck from '../../assets/icons/Truck.svg?react';
import IconCreditCard from '../../assets/icons/CreditCard.svg?react';
import IconMagnifyingGlass from '../../assets/icons/MagnifyingGlass.svg?react';
import IconVector from '../../assets/icons/Vector.svg?react';
import IconHeart from '../../assets/icons/Heart.svg?react';
import IconUserCircle from '../../assets/icons/UserCircle.svg?react';
import IconShoppingCart from '../../assets/icons/ShoppingCart.svg?react';
import IconCrownSimple from '../../assets/icons/IconCrownSimple.svg?react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      document.body.style.overflow = next ? 'hidden' : 'auto';
      document.body.style.height = next ? '100vh' : 'auto';
      return next;
    });
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header className="header-container">
      <div className="header-top-bar">
        <div className="container">
          <span><IconShieldCheck /> Compra <span className="highlight-text">100% segura</span></span>
          <span><IconTruck /> <span className="highlight-text">Frete grátis</span> acima de R$ 200</span>
          <span><IconCreditCard /> <span className="highlight-text">Parcele</span> suas compras</span>
        </div>
      </div>
      <div className="header-main-bar">
        <div className="container">
          <img src="/Logo.svg" alt="econverse" className="header-logo" />
          
          <div className="header-search-bar">
            <input type="text" placeholder="O que você está buscando?" />
            <button aria-label="Buscar">
              <IconMagnifyingGlass />
            </button>
          </div>
          
          <div className="header-user-icons">
            <IconVector />
            <IconHeart />
            <IconUserCircle />
            <IconShoppingCart />
          </div>

          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div 
        className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-hidden={!isMenuOpen}
      />

      <nav id="mobile-nav" className={`header-nav-bar ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <button className="mobile-menu-close" onClick={toggleMenu} aria-label="Fechar">×</button>
        <div className="container">
          <a href="#" className="active">todas categorias</a>
          <a href="#">supermercado</a>
          <a href="#">livros</a>
          <a href="#">moda</a>
          <a href="#">lançamentos</a>
          <a href="#">ofertas do dia</a>
          <a href="#" className="link-assinatura"><IconCrownSimple /> assinatura</a>
        </div>
      </nav>
    </header>
  );
}