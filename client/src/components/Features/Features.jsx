import "./Features.css";

const features = [
    {
        title: "AI Donor Recommendation",
        description:
            "Automatically identify the most suitable donors using intelligent machine learning algorithms.",
        icon: "🧠",
    },
    {
        title: "Emergency Requests",
        description:
            "Instantly broadcast urgent blood requests to eligible nearby donors.",
        icon: "🚑",
    },
    {
        title: "Live Analytics",
        description:
            "Visualize blood inventory, donations and emergency statistics in real time.",
        icon: "📊",
    },
    {
        title: "Secure Platform",
        description:
            "Protected authentication, authorization and encrypted communication for every user.",
        icon: "🔒",
    },
];

function Features() {
    return (
        <section className="features">

            <div className="features-heading">

                <h2>
                    Powerful Features
                </h2>

                <p>
                    Everything required to modernize blood donation
                    management on one intelligent platform.
                </p>

            </div>

            <div className="features-grid">

                {features.map((feature, index) => (

                    <div
                        key={index}
                        className="feature-card"
                    >

                        <div className="feature-icon">

                            {feature.icon}

                        </div>

                        <h3>

                            {feature.title}

                        </h3>

                        <p>

                            {feature.description}

                        </p>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Features;