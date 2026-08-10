const PricingSection = () => {
  return <main>
    <section>
        <header>
            <p>PRICING</p>
            <h1>Simple, transparent pricing</h1>
            <p>No hidden fees. No per-exam charges. One plan that scales with you</p>
        <section>
            <button>Monthly</button>
            <button>Annual <span>-20%</span></button>
        </section>
        </header>

        <footer>
            <div>
             <p>Educator</p>
             <section>
             <h3>$29</h3>
             <p>/month</p>
             <p>For Individual teachers and tutors running their own assessments</p>
             <ul>
                <li>Up to 200 students</li>
                <li>10 concurrent exam sessions</li>
                <li>Adaptive question engine</li>
                <li>Basic analytics dashboard</li>
                <li>Email support</li>
             </ul>
             <button>Start free trial</button>
             </section>
            </div>

            <div>
           <p>Institution</p>
             <section>
             <h3>$199</h3>
             <p>/month</p>
             <p>For schools, colleges and trainint centres with multiple educators</p>
             <ul>
                <li>Unlimited students</li>
                <li>Unlimited concurrent sessions</li>
                <li>Full adaptive engine</li>
                <li>Ai-assisted proctoring</li>
                <li>Priority support</li>
             </ul>
             <button>Start free trial</button>
             </section>
            </div>


            <div>
          <p>Enterprise</p>
          <h3>Custom</h3>
             <section>
             <p>For-large-scale deployments, government bodies, and certification boards</p>
             <ul>
                <li>Everything in institutions</li>
                <li>White-label branding</li>
                <li>Custom integrations & API access</li>
                <li>Dedicated Infrastructure</li>
                <li>Onboarding & training</li>
             </ul>
             <button>Contact sales</button>
             </section>
            </div>
        </footer>
    </section>
  </main>
}
export default PricingSection