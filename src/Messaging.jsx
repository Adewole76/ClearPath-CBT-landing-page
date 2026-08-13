const MessagingSection = () => {
  return (
    <main className="messaging-section">
      <section className="messaging-container">
        <section className="messaging-header" data-aos="fade-right" data-aos-duration="700">
          <p className="badge" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100">
            GET IN TOUCH
          </p>
          <h2 data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
            Ready to transform your assessments?
          </h2>
          <p className="message" data-aos="fade-up" data-aos-duration="600" data-aos-delay="350">
            Whether you're a single educator or a national examination body-our team will help you deploy a solutioin tailored to your exact requirements
          </p>

          <section className="messaging-info">
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
              <header className="msg-img">
                <img className="msg-image" src="/email.png" alt="" />
              </header>
              <footer>
                <p>Email</p>
                <p>adewoleoluwasegun@gmail.com</p>
              </footer>
            </div>
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
              <header className="msg-img">
                <img className="msg-image" src="/clock.png" alt="" />
              </header>
              <footer>
                <p>RESPONSE TIME</p>
                <p>Within 24 hours on business days</p>
              </footer>
            </div>
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="700">
              <header>
                <img className="msg-image" src="/hand.png" alt="" />
              </header>
              <footer>
                <p>SUPPORT LEVEL</p>
                <p>Dedicated onboarding for institutions & Enterprise plans</p>
              </footer>
            </div>
          </section>
        </section>

        <form action="" data-aos="fade-left" data-aos-duration="700" data-aos-delay="150">
          <section className="name-email">
            <label htmlFor="" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
              FULL NAME
              <input type="text" placeholder="Dr Sarah Micheal" />
            </label>
            <label htmlFor="" data-aos="fade-up" data-aos-duration="500" data-aos-delay="450">
              EMAIL
              <input type="email" placeholder="johndoe@gmail.com" />
            </label>
          </section>

          <label htmlFor="" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
            ORGANIZATION
            <input className="organization-input" type="text" placeholder="University of Ibadan" />
          </label>

          <label className="label-message" htmlFor="" data-aos="fade-up" data-aos-duration="500" data-aos-delay="550">
            MESSAGE
            <textarea type="text" />
          </label>

          <button type="button" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="650">
            Send message
          </button>
          <p className="privacy-policy">By submitting you agree to our Privacy Policy</p>
        </form>
      </section>
    </main>
  );
};
export default MessagingSection;