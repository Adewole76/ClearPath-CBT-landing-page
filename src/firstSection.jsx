import { TypeAnimation } from 'react-type-animation';
const FirstSection = () =>{
    return <main className="Home-section">
  <section>
    <div className="badge-container"><p className="badge">&#9679; COMPUTER BASED-TESTING PLATFORM</p></div>
<section className="headings">
    <h1>The assessment platform</h1>
     <TypeAnimation
      sequence={[
        'Built for Educators', 
        1000,         
        '',            // Clear the entire line
        500,   
        'Built for Students', 
        2000,
        '',            // Clear the entire line
        500,  
        'Built for Institution',
        2000         
      ]}
      wrapper="h2"   // Element that wraps the text (default is span)
      speed={50}       // Speed in ms per character
      repeat={Infinity} // Loops the sequence infinitely
    />
</section>
<div className="info-container">
    <p className="info">PastQ delivers adaptive, secure and data-rich examinations for educational institutions of every scale - from a single classroom to national certification bodies</p>
 </div>   
    <section className="start-watch">
        <button className="start-btn">Start for free-no credit card</button>
        <button className="watch-btn">Watch a 2-min demo &rarr;</button>
    </section>

<section className="reviews">
    <section>
        <p>12000+educators</p>
    </section>
    <p>4.9/5 average rating</p>
    <p>Trusted by 340+ institutions</p>
</section>
  </section>
    </main>
}
export default FirstSection