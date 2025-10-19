import './index.scss';
import IconLogo from '../../assets/icons/Logo.svg?url';

const listaMarcas = [
  { nome: 'Marca 1', icone: IconLogo },
  { nome: 'Marca 2', icone: IconLogo },
  { nome: 'Marca 3', icone: IconLogo },
  { nome: 'Marca 4', icone: IconLogo },
  { nome: 'Marca 5', icone: IconLogo },
];

export function Marcas() {
  return (
    <section className="marcas-container">
      <h2 className="marcas-titulo">Navegue por marcas</h2>

      <div className="marcas-wrapper">
        {listaMarcas.map((marca) => (
          <div className="marca-item" key={marca.nome}>
            <img src={marca.icone} alt={`Logo ${marca.nome}`} />
          </div>
        ))}
      </div>
    </section>
  );
}