import AuthLayout from "../../../components/Auth/AuthLayout";

import "./Register.css";

function Register(){

return(

<AuthLayout

title="Create Account"

subtitle="Register to become part of the BloodConnect network."

>

<form>

<div className="form-group">

<label>

Full Name

</label>

<input
type="text"
placeholder="Full Name"
/>

</div>

<div className="form-group">

<label>

Email

</label>

<input
type="email"
placeholder="Email"
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
className="register-btn">

Continue

</button>

</form>

</AuthLayout>

)

}

export default Register;