import { IoIosCheckmarkCircleOutline } from "react-icons/io";
const PricingSection = () => {
  return <main className="pricing-container">
    <section>
        <header>
            <p className="badge">PRICING</p>
            <h1 className="head-description">Simple, transparent pricing</h1>
          <article>
            <p className="hidden-fees">No hidden fees. No per-exam charges. One plan that scales with you</p>
          </article>
        </header>

        <footer>
            <div>
             <p className="user-class">Educator</p>
             <section>
             <h3 className="price">$29</h3>
             <p className="time-zone">/month</p>
             <p className="user-examples">For Individual teachers and tutors running their own assessments</p>
             <ul>
                <li><IoIosCheckmarkCircleOutline></IoIosCheckmarkCircleOutline> Up to 200 students</li>
                <li><IoIosCheckmarkCircleOutline />10 concurrent exam sessions</li>
                <li><IoIosCheckmarkCircleOutline />Adaptive question engine</li>
                <li><IoIosCheckmarkCircleOutline />Basic analytics dashboard</li>
                <li><IoIosCheckmarkCircleOutline />Email support</li>
             </ul>
             <button className="trial-btn">Start free trial</button>
             </section>
            </div>

            <div className="special-price">
           <p>Institution</p>
             <section>
             <h3 className="price">$199</h3>
             <p className="time-zone">/month</p>
             <p className="user-examples">For schools, colleges and trainint centres with multiple educators</p>
             <ul>
                <li><IoIosCheckmarkCircleOutline />Unlimited students</li>
                <li><IoIosCheckmarkCircleOutline />Unlimited concurrent sessions</li>
                <li><IoIosCheckmarkCircleOutline />Full adaptive engine</li>
                <li><IoIosCheckmarkCircleOutline />Ai-assisted proctoring</li>
                <li><IoIosCheckmarkCircleOutline />Priority support</li>
             </ul>
             <button className="trial-btn">Start free trial</button>
             </section>
            </div>


            <div>
          <p className="user-class">Enterprise</p>
          <h3 className="price">Custom</h3>
             <section>
             <p className="user-examples">For-large-scale deployments, government bodies, and certification boards</p>
             <ul>
                <li><IoIosCheckmarkCircleOutline />Everything in institutions</li>
                <li><IoIosCheckmarkCircleOutline />White-label branding</li>
                <li><IoIosCheckmarkCircleOutline />Custom integrations & API access</li>
                <li><IoIosCheckmarkCircleOutline />Dedicated Infrastructure</li>
                <li><IoIosCheckmarkCircleOutline />Onboarding & training</li>
             </ul>
             <button className="trial-btn">Contact sales</button>
             </section>
            </div>
        </footer>
    </section>
  </main>
}
export default PricingSection