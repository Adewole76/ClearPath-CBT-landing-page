const currentYear = new Date().getFullYear();
const RemarksSection =()=> {
   return <main className="remarks-main">
    <section className="remarks-section">
        <section>
            <h4>Past<span>Q</span></h4>
            <p className="last-remarks">The assessment platform built for 
                modern education.
            </p>
        </section>
<section className="remarks-lists">
        <ul>
            <li className="list-head">PRODUCT</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Security</li>
        </ul>
        <ul>
            <li className="list-head">RESOURCES</li>
            <li>Documentation</li>
            <li>API Reference</li>
            <li>Integrations</li>
            <li>Status</li>
        </ul>

        <ul>
            <li className="list-head">COMPANY</li>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Partners</li>
        </ul>
        <ul>
            <li className="list-head">LEGAL</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>GDPR</li>
        </ul>
      </section>
     </section>
<hr></hr>
<footer className="Copyright-media">
    <section>
        <p>&copy;{currentYear}PastQ Inc. All rights reserved</p>
    </section>

    <ul>
        <li>Twitter</li>
        <li>Github</li>
        <li>LinkedIn</li>
    </ul>
    </footer>
   </main>
}
export default RemarksSection