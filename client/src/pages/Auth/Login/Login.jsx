import { Link } from "react-router-dom";

import AuthLayout from "../../../components/Auth/AuthLayout";

import "./Login.css";

function Login() {

    return (

        <AuthLayout

            title="Welcome Back"

            subtitle="Sign in to continue."

        >

            <form>

                <div className="form-group">

                    <label>

                        Email

                    </label>

                    <input

                        type="email"

                        placeholder="Enter email"

                    />

                </div>

                <div className="form-group">

                    <label>

                        Password

                    </label>

                    <input

                        type="password"

                        placeholder="Password"

                    />

                </div>

                <button

                    className="login-btn"

                >

                    Login

                </button>

            </form>

            <div className="login-links">

                <button>

                    Forgot Password?

                </button>

                <Link to="/register">

                    Create Account

                </Link>

            </div>

        </AuthLayout>

    );

}

export default Login;