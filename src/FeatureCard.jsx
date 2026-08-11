import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
})  => {
 const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;
  const nextEnd = Math.min(end + segment, 1);

  // This card darkens while the NEXT card is entering (its own segment)
  const isLast = index === total - 1;

const overlayOpacity = useTransform(
  scrollYProgress,
  isLast ? [0, 1] : [end, nextEnd],
  isLast ? [0, 0] : [0, 0.65]
);
  return <motion.div 
      className="Card"
      style={{ overlayOpacity}}   
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
}
export default FeatureCard