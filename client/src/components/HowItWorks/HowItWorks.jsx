import "./HowItWorks.css";

const steps = [
    {
        number: "01",
        title: "Create Your Account",
        description:
            "Register as a donor, hospital, blood bank or administrator with secure authentication.",
    },
    {
        number: "02",
        title: "Verify Your Profile",
        description:
            "Complete your health profile and blood group information for accurate matching.",
    },
    {
        number: "03",
        title: "Receive Smart Matches",
        description:
            "Our AI recommends the best donors and predicts future blood demand.",
    },
    {
        number: "04",
        title: "Save Lives",
        description:
            "Donate blood, respond to emergency requests and track your contribution.",
    },
];

function HowItWorks() {
    return (
        <section className="how-it-works">

            <div className="how-header">

                <h2>How It Works</h2>

                <p>

                    A simple four-step process designed to connect donors,
                    hospitals and patients quickly and efficiently.

                </p>

            </div>

            <div className="steps">

                {steps.map((step) => (

                    <div
                        key={step.number}
                        className="step-card"
                    >

                        <div className="step-number">

                            {step.number}

                        </div>

                        <h3>

                            {step.title}

                        </h3>

                        <p>

                            {step.description}

                        </p>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default HowItWorks;