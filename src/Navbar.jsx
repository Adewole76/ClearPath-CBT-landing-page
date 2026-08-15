const NavBar = ({toggle}) => {
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

            <section>
                <button className="sign-in-btn">Sign in</button>
                <button className="get-started-btn">Get Started</button>
            </section>

            <button onClick={toggle} className="hamburger-menu">
                <img className="hamburger-image" src="/hamburger.png" alt="" />
            </button>
        </nav>
    );
};
export default NavBar;