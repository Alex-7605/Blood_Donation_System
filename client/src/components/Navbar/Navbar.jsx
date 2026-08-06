import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar(){

return(

<nav className="navbar">

<div className="logo">

BloodConnect

</div>

<div className="links">

<Link to="/">Home</Link>

<Link to="/">Features</Link>

<Link to="/">AI</Link>

<Link to="/">Emergency</Link>

<Link to="/">Contact</Link>

</div>

<div className="buttons">

<Link to="/login">

<button className="login">

Login

</button>

</Link>

<Link to="/register">

<button className="register">

Register

</button>

</Link>

</div>

</nav>

)

}

export default Navbar;