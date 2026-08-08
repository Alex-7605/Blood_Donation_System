import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AuthLayout from "../../../components/Auth/AuthLayout";

import AuthService from "../../../services/authService";

import { useAuth } from "../../../context/AuthContext";

import "./Register.css";

function Register() {

    const navigate = useNavigate();

    const { role } = useParams();

    const { loading, setLoading } = useAuth();

    const [form, setForm] = useState({

        firstName: "",

        lastName: "",

        email: "",

        phone: "",

        password: "",

        confirmPassword: "",

    });

    function handleChange(e){

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    }

    async function handleSubmit(e){

        e.preventDefault();

        if(form.password!==form.confirmPassword){

            alert("Passwords do not match.");

            return;

        }

        try{

            setLoading(true);

            const payload={

                firstName:form.firstName,

                lastName:form.lastName,

                email:form.email,

                phone:form.phone,

                password:form.password,

                role

            };

            console.log(payload);

            // We'll connect the API in the next step.

        }

        finally{

            setLoading(false);

        }

    }

    return(

<AuthLayout
title={`Register as ${role}`}
subtitle="Create your BloodConnect account."
>

<form onSubmit={handleSubmit}>

<div className="form-group">

<label>

First Name

</label>

<input
name="firstName"
value={form.firstName}
onChange={handleChange}
/>

</div>

<div className="form-group">

<label>

Last Name

</label>

<input
name="lastName"
value={form.lastName}
onChange={handleChange}
/>

</div>

<div className="form-group">

<label>

Email

</label>

<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
/>

</div>

<div className="form-group">

<label>

Phone

</label>

<input
name="phone"
value={form.phone}
onChange={handleChange}
/>

</div>

<div className="form-group">

<label>

Password

</label>

<input
type="password"
name="password"
value={form.password}
onChange={handleChange}
/>

</div>

<div className="form-group">

<label>

Confirm Password

</label>

<input
type="password"
name="confirmPassword"
value={form.confirmPassword}
onChange={handleChange}
/>

</div>

<button
className="register-btn"
type="submit"
disabled={loading}
>

{

loading

?

"Creating Account..."

:

"Register"

}

</button>

</form>

</AuthLayout>

)

}

export default Register;