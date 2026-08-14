const NavBar = ({toggle}) => {
    return (
        <nav className="nav-bar">
            <h2 className="logo">
                Past<span>Q</span>
            </h2>

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

            <button onClick={toggle} className="hamburger-menu">
                <img className="hamburger-image" src="/hamburger.png" alt="" />
            </button>
        </nav>
    );
};
export default NavBar;