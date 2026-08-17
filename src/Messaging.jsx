import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const MessagingSection = () => {
const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
         import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus('success');
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus('error');
      });
  };



  return (
    <main id="contactMe" className="messaging-section">
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

        <form ref={form} onSubmit={sendEmail} action="" data-aos="fade-left" data-aos-duration="700" data-aos-delay="150">
          <section className="name-email">
            <label htmlFor="" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
              FULL NAME
              <input type="text" name="user_name" placeholder="Dr Sarah Micheal" required/>
            </label>
            <label htmlFor="" data-aos="fade-up" data-aos-duration="500" data-aos-delay="450">
              EMAIL
              <input type="email" name="user_email" placeholder="johndoe@gmail.com" required/>
            </label>
          </section>

          <label htmlFor="" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
            ORGANIZATION
            <input className="organization-input" type="text" placeholder="University of Ibadan" required/>
          </label>

          <label className="label-message" htmlFor="" data-aos="fade-up" data-aos-duration="500" data-aos-delay="550">
            MESSAGE
            <textarea type="text" name="message" required/>
          </label>

          <button type="Submit" disabled={status === 'sending'}  data-aos="zoom-in" data-aos-duration="500" data-aos-delay="650">
             {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          <p className="privacy-policy">By submitting you agree to our Privacy Policy</p>
        </form>
      </section>
    </main>
  );
};
export default MessagingSection;