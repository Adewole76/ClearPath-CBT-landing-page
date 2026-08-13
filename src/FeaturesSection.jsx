// FeaturesSection.jsx
import FeatureCard from "./FeatureCard"
import firstPic from "./assets/First1.jpg"
import SecondPic from "./assets/Second.jpg"
import ThirdPic from "./assets/Third.jpg"
import FourthPic from "./assets/Fourth.jpg"
import { motion, useScroll } from "framer-motion";
import { useRef } from "react"

const FeaturesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const features = [
    {
      title: "Adaptive Engine",
      header: "Exams that respond to every learner",
      description: "Our AI-powered testing engine adjusts questions difficulty in real time based on each candidate performance-ensuring every student is challenged at precisely the right level. No two sessions are identical.",
      Number: 98,
      tag: "Assessment accuracy",
      imageSrc: firstPic,
    },
    {
      title: "Adaptive Engine",
      header: "Exams that respond to every learner",
      description: "Our AI-powered testing engine adjusts questions difficulty in real time based on each candidate performance-ensuring every student is challenged at precisely the right level. No two sessions are identical.",
      Number: 98,
      tag: "Assessment accuracy",
      imageSrc: FourthPic,
    },
    {
      title: "Adaptive Engine",
      header: "Exams that respond to every learner",
      description: "Our AI-powered testing engine adjusts questions difficulty in real time based on each candidate performance-ensuring every student is challenged at precisely the right level. No two sessions are identical.",
      Number: 98,
      tag: "Assessment accuracy",
      imageSrc: FourthPic,
    },
    {
      title: "Adaptive Engine",
      header: "Exams that respond to every learner",
      description: "Our AI-powered testing engine adjusts questions difficulty in real time based on each candidate performance-ensuring every student is challenged at precisely the right level. No two sessions are identical.",
      Number: 98,
      tag: "Assessment accuracy",
      imageSrc: ThirdPic,
    },
  ]

  return (
    <main className="featuresSection">
      <section className="inner-section">
        <section>
          <p className="badge" data-aos="zoom-in" data-aos-duration="500">
            PLATFORM CAPABILITIES
          </p>
          <h1 data-aos="fade-up" data-aos-duration="700" data-aos-delay="150">
            Everything an assessment needs
          </h1>
          <h2 data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
            Nothing it doesn't
          </h2>
          <div className="scroll-instruction">
            <p className="instruction" data-aos="fade-up" data-aos-duration="600" data-aos-delay="450">
              Scroll to explore the features that make Pastq the trusted choice for rigorous digital assessment
            </p>
          </div>
        </section>

        <section ref={ref} className="cards-section">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              total={features.length}
              scrollYProgress={scrollYProgress}
              {...feature}
            />
          ))}
        </section>
      </section>
    </main>
  )
}
export default FeaturesSection