import './index.scss';
import IconTecnologia from '../../assets/icons/IconTecnologia.svg?url';
import IconSupermercado from '../../assets/icons/IconSupermercado.svg?url';
import IconBebidas from '../../assets/icons/IconBebidas.svg?url';
import IconFerramentas from '../../assets/icons/IconFerramentas.svg?url';
import IconSaude from '../../assets/icons/IconSaude.svg?url';
import IconEsportes from '../../assets/icons/IconEsportes.svg?url';
import IconModa from '../../assets/icons/IconModa.svg?url';

const listaCategorias = [
  { nome: 'Tecnologia', icone: IconTecnologia },
  { nome: 'Supermercado', icone: IconSupermercado },
  { nome: 'Bebidas', icone: IconBebidas },
  { nome: 'Ferramentas', icone: IconFerramentas },
  { nome: 'Saúde', icone: IconSaude },
  { nome: 'Esportes e Fitness', icone: IconEsportes },
  { nome: 'Moda', icone: IconModa },
];

export function Categorias() {
  return (
    <section className="categorias-container">
      <div className="container">
        {listaCategorias.map((categoria) => (
          <div className="categoria-item" key={categoria.nome}>
            <div className="categoria-icone-wrapper">
              <img src={categoria.icone} alt={`Ícone ${categoria.nome}`} />
            </div>
            <p>{categoria.nome}</p>
          </div>
        ))}
      </div>
    </section>
  );
}