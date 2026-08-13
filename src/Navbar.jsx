const NavBar = () => {
    return (
        <nav className="nav-bar">
            <h2 className="logo" data-aos="fade-down" data-aos-duration="500">
                Past<span>Q</span>
            </h2>

            <ul>
                <li data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">Home</li>
                <li data-aos="fade-down" data-aos-duration="500" data-aos-delay="150">About</li>
                <li data-aos="fade-down" data-aos-duration="500" data-aos-delay="200">Pricing</li>
                <li data-aos="fade-down" data-aos-duration="500" data-aos-delay="250">Contact</li>
            </ul>

            <section>
                <button className="sign-in-btn" data-aos="fade-down" data-aos-duration="500" data-aos-delay="300">
                    Sign in
                </button>
                <button className="get-started-btn" data-aos="fade-down" data-aos-duration="500" data-aos-delay="350">
                    Get Started
                </button>
            </section>

            <button className="hamburger-menu" data-aos="fade-down" data-aos-duration="500">
                <img className="hamburger-image" src="/hamburger.png" alt="" />
            </button>
        </nav>
    );
};
export default NavBar;