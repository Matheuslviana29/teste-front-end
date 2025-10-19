import { useEffect, useRef, useState } from 'react';
import type { Product } from '../../types';
import './index.scss';

interface Props {
  produto: Product;
  aoClicarNoProduto: (produto: Product) => void;
}

export function CardProduto({ produto, aoClicarNoProduto }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const checkSize = () => {
      setIsLarge(el.scrollHeight > 420);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <div ref={cardRef} className={`card-produto ${isLarge ? 'card-large' : ''}`} onClick={() => aoClicarNoProduto(produto)}>
      <img src={produto.photo} alt={produto.productName} />
      <div className="product-description">
        <p>Lorem ipsum dolor sit amet consectetur. Nunc laoreet adipiscing enim sit. Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="product-pricing">
        <span className="old-price">R$ 30,90</span>
        <div className="current-price">
          <span className="currency">R$</span>
          <span className="price">28,90</span>
        </div>
        <p className="installments">ou 2x de R$ 49,95 sem juros</p>
        <p className="shipping">frete grátis</p>
      </div>
      <button>COMPRAR</button>
    </div>
  );
}