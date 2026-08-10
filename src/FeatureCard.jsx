const FeatureCard = ({title, header, description, Number, tag, imageSrc}) => {
  return <div className="Card">
    <section className="Card-info">
        <section>
            <p className="badge">{title}</p>
            <h1>{header}</h1>
            <p>{description}</p>
            <footer>
                <p>{Number}</p>
                <p>{tag}</p>
            </footer>
        </section>
    </section>
    <section className="feature-image-container">
    <img className="feature-image" src={imageSrc} alt="" />
    </section>
  </div>
}
export default FeatureCard