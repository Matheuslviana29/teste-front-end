import './index.scss';

export function Banner() {
    return (
        <section className="banner-container">
            <div className="banner-overlay"></div>

            <div className="banner-content">
                <h1>
                    Venha conhecer nossas
                    <br />
                    promoções
                </h1>
                <h2>
                    <span className="off-text">50% Off</span> nos produtos
                </h2>
                <button className="banner-button">Ver produto</button>
            </div>
        </section>
    );
}