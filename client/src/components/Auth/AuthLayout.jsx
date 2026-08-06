import "./AuthLayout.css";

function AuthLayout({ title, subtitle, children }) {

    return (

        <div className="auth-layout">

            <div className="auth-left">

                <div className="overlay">

                    <h1>

                        BloodConnect

                    </h1>

                    <h2>

                        Save Lives Through Technology

                    </h2>

                    <p>

                        AI-powered blood donation management for donors,
                        hospitals and organizations.

                    </p>

                </div>

            </div>

            <div className="auth-right">

                <div className="auth-container">

                    <h2>

                        {title}

                    </h2>

                    <p>

                        {subtitle}

                    </p>

                    {children}

                </div>

            </div>

        </div>

    );

}

export default AuthLayout;