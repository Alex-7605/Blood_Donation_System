import { useState } from "react";
import { useNavigate } from "react-router-dom";

import roles from "../../../data/roles";

import "./RoleSelection.css";

function RoleSelection() {

    const navigate = useNavigate();

    const [selectedRole, setSelectedRole] = useState(null);

    const handleContinue = () => {

        if (!selectedRole) {

            alert("Please select a role.");

            return;

        }

        navigate(`/register/${selectedRole}`);

    };

    return (

        <div className="role-page">

            <div className="role-container">

                <h1>

                    Select Your Role

                </h1>

                <p>

                    Choose how you want to use BloodConnect.

                </p>

                <div className="role-grid">

                    {

                        roles.map((role) => (

                            <div

                                key={role.id}

                                className={`role-card ${
                                    selectedRole === role.id
                                        ? "selected"
                                        : ""
                                }`}

                                onClick={() =>
                                    setSelectedRole(role.id)
                                }

                            >

                                <div className="role-icon">

                                    {role.icon}

                                </div>

                                <h3>

                                    {role.title}

                                </h3>

                                <p>

                                    {role.description}

                                </p>

                            </div>

                        ))

                    }

                </div>

                <button

                    className="continue-btn"

                    onClick={handleContinue}

                >

                    Continue

                </button>

            </div>

        </div>

    );

}

export default RoleSelection;