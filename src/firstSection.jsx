import { TypeAnimation } from 'react-type-animation';

const FirstSection = () => {
    return (
        <main id="home" className="Home-section">
            <section>
                <div className="badge-container" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">
                    <p className="badge">&#9679; COMPUTER BASED-TESTING PLATFORM</p>
                </div>

                <section className="headings">
                    <h1 data-aos="fade-down" data-aos-duration="800" data-aos-delay="400">
                        The assessment platform
                    </h1>

                    <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="700">
                        <TypeAnimation
                            sequence={[
                                'Built for Educators',
                                1000,
                                'Built for Students',
                                2000,
                                'Built for Institutions',
                                2000
                            ]}
                            wrapper="h2"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                </section>

                <div className="info-container" data-aos="fade-up" data-aos-duration="600" data-aos-delay="900">
                    <p className="info">
                        PastQ delivers adaptive, secure and data-rich examinations for educational institutions
                        of every scale - from a single classroom to national certification bodies
                    </p>
                </div>

                <section className="start-watch">
                    <button
                        className="start-btn"
                        data-aos="flip-left"
                        data-aos-duration="600"
                        data-aos-delay="1100"
                    >
                        Start for free-no credit card
                    </button>
                    <button
                        className="watch-btn"
                        data-aos="flip-right"
                        data-aos-duration="600"
                        data-aos-delay="1200"
                    >
                        Watch a 2-min demo &rarr;
                    </button>
                </section>

                <section className="reviews">
                    <section data-aos="fade-up" data-aos-duration="500" data-aos-delay="1400">
                        <p>12000+educators</p>
                    </section>
                    <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">
                        4.9/5 average rating
                    </p>
                    <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="1600">
                        Trusted by 340+ institutions
                    </p>
                </section>
            </section>
        </main>
    );
};
export default FirstSection;