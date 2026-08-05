import "./Navbar.css";

function Navbar(){

    return(

        <nav className="navbar">

            <div className="logo">

                BloodConnect

            </div>

            <div className="links">

                <a href="/">Home</a>

                <a href="/">About</a>

                <a href="/">Donate</a>

                <a href="/">Emergency</a>

                <a href="/">Contact</a>

            </div>

            <div className="buttons">

                <button className="login">

                    Login

                </button>

                <button className="register">

                    Register

                </button>

            </div>

        </nav>

    )

}

export default Navbar;