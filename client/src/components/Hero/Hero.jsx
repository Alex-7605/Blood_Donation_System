import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <span className="hero-tag">
                    AI Powered Healthcare Platform
                </span>

                <h1>
                    Donate Blood,
                    <br />
                    Save Lives.
                </h1>

                <p>
                    Connect donors, hospitals, and blood
                    banks through an intelligent platform
                    powered by Artificial Intelligence,
                    real-time analytics, and emergency
                    response systems.
                </p>

                <div className="hero-buttons">

                    <button className="primary-btn">
                        Become a Donor
                    </button>

                    <button className="secondary-btn">
                        Request Blood
                    </button>

                </div>

            </div>

            <div className="hero-image">

                <div className="blood-circle">

                    ❤️

                </div>

            </div>

        </section>
    );
}

export default Hero;