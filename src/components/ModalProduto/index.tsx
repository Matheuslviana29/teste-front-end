 import { useState } from 'react';
import type { Product } from '../../types';
import './index.scss';

interface Props {
  produto: Product | null;
  aoFechar: () => void;
}

const formatarPreco = (preco: number): string => {
  return preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export function ModalProduto({ produto, aoFechar }: Props) {
  const [quantidade, setQuantidade] = useState(1);

  if (!produto) {
    return null;
  }

  const incrementar = () => setQuantidade(q => q + 1);
  const decrementar = () => setQuantidade(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="modal-overlay" onClick={aoFechar}>
      <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
        <button className="modal-botao-fechar" onClick={aoFechar}>
          X
        </button>
        
<div className="modal-imagem-wrapper">
          <img src={produto.photo} alt={produto.productName} />
        </div>

<div className="modal-info">
          <h2>{produto.productName}</h2>
          <p className="modal-preco">{formatarPreco(produto.price)}</p>
          <p className="modal-descricao">{produto.descriptionShort}</p>
          <a href="#" className="modal-link-detalhes">
            Veja mais detalhes do produto &gt;
          </a>
          
          <div className="modal-compra-wrapper">
            <div className="modal-quantidade">
              <button onClick={decrementar}>
                <svg width="12" height="12" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.76859 10.2231H16.6147" stroke="#271C47" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                </svg>
              </button>
              <span>{String(quantidade).padStart(2, '0')}</span>
              <button onClick={incrementar}>
                <svg width="12" height="12" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6924 4.49585V15.9504" stroke="#271C47" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                  <path d="M4.76859 10.2231H16.6147" stroke="#271C47" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <button className="modal-botao-comprar">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}