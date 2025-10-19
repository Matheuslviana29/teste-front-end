import { useState, useEffect } from 'react';
import type { Product, ApiResponse } from './types';
import { ListaDeProdutos } from './components/ListaDeProdutos';
import { ModalProduto } from './components/ModalProduto';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Categorias } from './components/Categorias';
import { Parceiros } from './components/Parceiros';
import { Marcas } from './components/Marcas';
import { Footer } from './components/Footer';
import './App.scss';

const API_URL = '/products.json';

function App() {
  const [produtos, setProdutos] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Não foi possível encontrar o arquivo products.json');
        }
        const data: ApiResponse = await response.json();
        setProdutos(data.products);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const lidarComAbrirModal = (produto: Product) => {
    setProdutoSelecionado(produto);
  };

  const lidarComFecharModal = () => {
    setProdutoSelecionado(null);
  };

  if (loading) {
    return <div className="app-container">Carregando produtos...</div>;
  }

  if (error) {
    return <div className="app-container">Erro ao buscar produtos: {error}</div>;
  }

  return (
    <div className="app-container">
      
      <Header />
      
      <Banner />
      
      <Categorias />
      
      <ListaDeProdutos 
        produtos={produtos} 
        aoClicarNoProduto={lidarComAbrirModal} 
        variant="navigation" 
      />
      
      <Parceiros />
      
      <ListaDeProdutos 
        produtos={produtos} 
        aoClicarNoProduto={lidarComAbrirModal} 
      />
      
      <Parceiros />
      
      <Marcas />
      
      <ListaDeProdutos 
        produtos={produtos} 
        aoClicarNoProduto={lidarComAbrirModal} 
      />

      <Footer />

      <ModalProduto 
        produto={produtoSelecionado} 
        aoFechar={lidarComFecharModal} 
      />
    </div>
  );
}

export default App;