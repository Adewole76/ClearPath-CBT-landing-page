// FeatureCard.jsx
import { motion, useTransform } from 'framer-motion';

const FeatureCard = ({
  index,
  total,
  scrollYProgress,
  title,
  header,
  description,
  Number,
  tag,
  imageSrc
}) => {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;
  const nextEnd = Math.min(end + segment, 1);
  const isLast = index === total - 1;
  const isFirst = index === 0;

  // Existing darkening logic — unchanged
  const overlayOpacity = useTransform(
    scrollYProgress,
    isLast ? [0, 1] : [end, nextEnd],
    isLast ? [0, 0] : [0, 0.65]
  );

  // New: entrance "rise into place" as each card's own segment begins.
  // First card is already on screen at load, so it just stays fully visible.
  const riseStart = Math.max(start - segment * 0.3, 0);
  const riseEnd = start + segment * 0.15;

  const entranceOpacity = useTransform(
    scrollYProgress,
    isFirst ? [0, 0] : [riseStart, riseEnd],
    isFirst ? [1, 1] : [0, 1]
  );
  const entranceScale = useTransform(
    scrollYProgress,
    isFirst ? [0, 0] : [riseStart, riseEnd],
    isFirst ? [1, 1] : [0.94, 1]
  );

  return (
    <motion.div
      className="Card"
      style={{
        opacity: entranceOpacity,
        scale: entranceScale,
      }}
    >
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

      <motion.div
        className="card-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'black',
          opacity: overlayOpacity,
          borderRadius: '1em',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  )
}
export default FeatureCard