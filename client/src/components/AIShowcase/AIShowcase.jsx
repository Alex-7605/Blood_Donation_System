import "./AIShowcase.css";

const aiFeatures = [
    {
        title: "Donor Recommendation",
        description:
            "Machine learning recommends the most suitable donors based on blood group, eligibility, location and donation history.",
    },
    {
        title: "Demand Prediction",
        description:
            "Predict upcoming blood demand to help hospitals prepare inventory before shortages occur.",
    },
    {
        title: "Fraud Detection",
        description:
            "Detect suspicious requests and unusual donation patterns using intelligent anomaly detection.",
    },
];

function AIShowcase() {

    return (

        <section className="ai-showcase">

            <div className="ai-left">

                <span>Artificial Intelligence</span>

                <h2>

                    Healthcare Enhanced by AI

                </h2>

                <p>

                    Three machine learning models work together to
                    improve donor matching, predict shortages and
                    increase trust throughout the platform.

                </p>

            </div>

            <div className="ai-right">

                {

                    aiFeatures.map((feature) => (

                        <div
                            key={feature.title}
                            className="ai-card"
                        >

                            <h3>

                                {feature.title}

                            </h3>

                            <p>

                                {feature.description}

                            </p>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default AIShowcase;