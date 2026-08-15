// FeaturesSection.jsx
import { useRef, useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import firstPic from "./assets/First1.jpg";
import SecondPic from "./assets/Second.jpg";
import ThirdPic from "./assets/Third.jpg";
import FourthPic from "./assets/Fourth.jpg";

const PEEK = 10; // px each stacked card peeks above the next

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [fromBottom, setFromBottom] = useState(700);

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
  ];

  const COUNT = features.length;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const measure = () => {
      const pin = pinRef.current;
      if (!pin) return;
      const peekRoom = (COUNT - 1) * PEEK;
      const cardH =
        parseFloat(getComputedStyle(section).getPropertyValue("--card-h")) || 400;
      const travel = Math.max(cardH + 80, pin.clientHeight - peekRoom);
      setFromBottom(travel);
    };

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const stickyTop =
        parseFloat(getComputedStyle(section).getPropertyValue("--stick-top")) || 80;
      const scrolled = stickyTop - rect.top;
      const total = section.offsetHeight - window.innerHeight;
      setProgress(total > 0 ? clamp(scrolled / total, 0, 1) : 0);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [COUNT]);

  const scaled = progress * Math.max(COUNT - 1, 1);
  const k = Math.min(COUNT - 1, Math.floor(scaled));
  const t = k >= COUNT - 1 ? 0 : scaled - k;

  return (
    <main id="Feats" className="featuresSection">
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

        <section ref={sectionRef} className="cards-section">
          <div className="features-pin" ref={pinRef}>
            <div
              className="features-deck"
              style={{ "--peek-room": `${(COUNT - 1) * PEEK}px` }}
            >
              {features.map((feature, index) => {
                let y;
                let z = index + 1;
                let contentOn = false;

                if (index < k) {
                  y = (index - k) * PEEK - t * PEEK;
                  contentOn = false;
                } else if (index === k) {
                  y = -t * PEEK;
                  contentOn = t < 0.88;
                } else if (index === k + 1) {
                  y = (1 - t) * fromBottom;
                  contentOn = true;
                  z = COUNT + 5;
                } else {
                  y = fromBottom + 40;
                  contentOn = false;
                }

                return (
                  <div
                    key={index}
                    className={`Card${contentOn ? " Card-live" : " Card-shell"}`}
                    style={{
                      zIndex: z,
                      transform: `translate3d(0, ${y}px, 0)`,
                      pointerEvents: contentOn ? "auto" : "none",
                    }}
                    aria-hidden={!contentOn}
                  >
                    <FeatureCard {...feature} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};
export default FeaturesSection;