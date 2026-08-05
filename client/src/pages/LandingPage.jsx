import Navbar from "../components/Navbar/Navbar";

function LandingPage(){

    return(

        <>

        <Navbar/>

        <div
        style={{

            height:"90vh",

            display:"flex",

            justifyContent:"center",

            alignItems:"center",

            flexDirection:"column"

        }}>

        <h1>

        Blood Donation Management System

        </h1>

        <p>

        AI Powered Blood Donation Platform

        </p>

        </div>

        </>

    )

}

export default LandingPage;