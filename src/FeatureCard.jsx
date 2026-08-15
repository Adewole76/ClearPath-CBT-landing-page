// FeatureCard.jsx — now purely presentational, no scroll logic
const FeatureCard = ({ title, header, description, Number, tag, imageSrc }) => {
  return (
    <>
      <section className="Card-info">
        <section>
          <p className="badge">{title}</p>
          <h1>{header}</h1>
          <p className="card-description">{description}</p>
          <footer>
            <p className="feature-num">{Number}%</p>
            <p className="feature-tag">{tag}</p>
          </footer>
        </section>
      </section>
      <section className="feature-image-container">
        <img className="feature-image" src={imageSrc || null} alt="" />
      </section>
    </>
  );
};
export default FeatureCard;