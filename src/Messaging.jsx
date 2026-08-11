const MessagingSection = () => {
 return <main className="messaging-section">
    <section className="messaging-container">
        <section className="messaging-header">
            <p className="badge">GET IN TOUCH</p>
            <h2>Ready to transform your assessments?</h2>
            <p className="message">Whether you're a single educator or a national examination body-our team will help you deploy a solutioin tailored to your exact requirements</p>            
        
        <section className="messaging-info">
            <div>
                <img src="" alt="" />
                <footer>
                    <p>Email</p>
                    <p>adewoleoluwasegun@gmail.com</p>
                </footer>
            </div>
            <div>
                <img src="" alt="" />
                <footer>
                    <p>RESPONSE TIME</p>
                    <p>Within 24 hours on business days</p>
                </footer>
            </div>
            <div>
                <img src="" alt="" />
                <footer>
                    <p>SUPPORT LEVEL</p>
                    <p>Dedicated onboarding for institutions & Enterprise plans</p>
                </footer>
            </div>
        </section>
        </section>
        <form action="">
          <section className="name-email">
            <label htmlFor="">
                FULL NAME
                <input type="text" placeholder="Dr Sarah Micheal" />
            </label>
            <label htmlFor="">
                EMAIL
                <input type="email" placeholder="johndoe@gmail.com" />
            </label>
          </section>

          <label htmlFor="">
            ORGANIZATION
            <input type="text" placeholder="University of Ibadan" />
          </label>
          <label htmlFor="">
            MESSAGE
            <textarea type="text" />
          </label>
        <button type="button">Send message</button>
        <p>By submitting you agree to our Privacy Policy</p>
        </form>

    </section>
 </main>
}
export default MessagingSection