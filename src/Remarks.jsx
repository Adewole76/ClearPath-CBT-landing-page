const currentYear = new Date().getFullYear();
const RemarksSection =()=> {
   return <main>
    <section>
        <section>
            <h4>PastQ</h4>
            <p>The assessment platform built for 
                modern education.
            </p>
        </section>

        <ul>
            <li>PRODUCT</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Security</li>
        </ul>
        <ul>
            <li>Resources</li>
            <li>Documentation</li>
            <li>API Reference</li>
            <li>Integrations</li>
            <li>Status</li>
        </ul>

        <ul>
            <li>COMPANY</li>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Partners</li>
        </ul>
        <ul>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>GDPR</li>
        </ul>
    </section>
<hr></hr>
    <section>
        <p>&copy;{currentYear}PastQ Inc. All rights reserved</p>
    </section>

    <ul>
        <li>Twitter</li>
        <li>Github</li>
        <li>LinkedIn</li>
    </ul>
   </main>
}
export default RemarksSection