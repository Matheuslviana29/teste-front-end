import './index.scss';

export function Parceiros() {
  
  const cardData = {
    title: 'Parceiros',
    description: 'Lorem ipsum dolor sit amet, consectetur',
    buttonText: 'Confira',
    imageUrl: '/BannerApple.jpg'
  };

  return (
    <section className="parceiros-container">
      <div className="container">
        <div 
          className="parceiro-card" 
          style={{ backgroundImage: `url(${cardData.imageUrl})` }}
        >
          <div className="parceiro-overlay"></div>
          <div className="parceiro-content">
            <h3>{cardData.title}</h3>
            <p>{cardData.description}</p>
            <button>{cardData.buttonText}</button>
          </div>
        </div>

        <div 
          className="parceiro-card" 
          style={{ backgroundImage: `url(${cardData.imageUrl})` }}
        >
          <div className="parceiro-overlay"></div>
          <div className="parceiro-content">
            <h3>{cardData.title}</h3>
            <p>{cardData.description}</p>
            <button>{cardData.buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  );
}