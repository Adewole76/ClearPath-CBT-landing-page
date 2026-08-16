const NavBar = ({toggle, active}) => {
    return (
        <nav className="nav-bar">
            <h2 className="logo">
                Past<span>Q</span>
            </h2>

            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#Feats">About</a></li>
                <li><a href="#prices">Pricing</a></li>
                <li><a href="#contactMe">Contact</a></li>
            </ul>

            <section className="nav-btns">
                <button className="sign-in-btn">Sign in</button>
                <button className="get-started-btn">Get Started</button>
             <button onClick={toggle} className="hamburger-menu">
                <img className="hamburger-image" src= {!active? "/hamburger.png":"/close.png"} alt="" />
            </button>
            </section>

           
        </nav>
    );
};
export default NavBar;