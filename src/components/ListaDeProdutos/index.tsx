import { useState, useEffect } from 'react';
import type { Product } from '../../types';
import { CardProduto } from '../CardProduto'; 
import './index.scss';

interface Props {
  produtos: Product[];
  aoClicarNoProduto: (produto: Product) => void;
  variant?: 'navigation' | 'default';
}

export function ListaDeProdutos({ 
  produtos, 
  aoClicarNoProduto, 
  variant = 'default'
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleProducts = isMobile && !showAllMobile ? produtos.slice(0, 4) : produtos;

  useEffect(() => {
    if (currentIndex >= visibleProducts.length) {
      setCurrentIndex(Math.max(visibleProducts.length - 1, 0));
    }
  }, [visibleProducts.length]);
  
  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % visibleProducts.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + visibleProducts.length) % visibleProducts.length);
  };

  const toggleShowAllMobile = () => setShowAllMobile((prev) => !prev);

  return (
    <section className="lista-produtos-container">

      <div className={`lista-produtos-header ${variant}`}>
        <h2>Produtos relacionados</h2>
        {variant === 'default' && (
          <a href="#" className="lista-produtos-ver-todos-top">Ver todos</a>
        )}
      </div>

      {variant === 'navigation' && (
        <nav className="lista-produtos-nav">
          <ul>
            <li><a href="#">Celular</a></li>
            <li><a href="#">acessorios</a></li>
            <li><a href="#">tablets</a></li>
            <li><a href="#">notebooks</a></li>
            <li><a href="#">tvs</a></li>
            <li><a href="#">ver todos</a></li>
          </ul>
        </nav>
      )}

      <div className={`lista-produtos-wrapper ${variant}`}>
        <div 
          className={`lista-produtos-grid ${variant}`}
          style={
            variant === 'navigation' 
              ? ({ ['--current-index' as any]: currentIndex, ['--total-products' as any]: visibleProducts.length } as React.CSSProperties)
              : undefined
          }
        >
          {visibleProducts.map((produto) => (
            <CardProduto
              key={produto.productName}
              produto={produto}
              aoClicarNoProduto={aoClicarNoProduto}
            />
          ))}
        </div>

        {variant === 'navigation' && (
          <>
            <button 
              className="nav-arrow nav-arrow-left" 
              onClick={prevProduct}
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="#3F3F40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="nav-arrow nav-arrow-right" 
              onClick={nextProduct}
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="#3F3F40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}

        {isMobile && produtos.length > 4 && (
          <div className="lista-produtos-footer">
            <button className="lista-produtos-ver-mais" onClick={toggleShowAllMobile} aria-expanded={showAllMobile}>
              {showAllMobile ? 'ver menos' : 'ver mais'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}