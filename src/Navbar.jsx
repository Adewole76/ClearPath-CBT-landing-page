const NavBar = () =>{
    return <nav className="nav-bar">
 <h2 className="logo">Past<span>q</span></h2>
 <ul>
    <li>Home</li>
    <li>About</li>
    <li>Pricing</li>
    <li>Contact</li>
 </ul>

 <section>
    <button className="sign-in-btn">Sign in</button>
    <button className="get-started-btn">Get Started</button>
 </section>

 <button className="hamburger-menu hidden"><img className="hamburger-image" src="/hamburger.png" alt="" /></button>
    </nav>
}
export default NavBar