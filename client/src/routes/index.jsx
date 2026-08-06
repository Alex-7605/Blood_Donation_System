import {

Routes,

Route,

} from "react-router-dom";

import LandingPage from "../pages/LandingPage";

import Login from "../pages/Auth/Login/Login";

import Register from "../pages/Auth/Register/Register";

function AppRoutes(){

return(

<Routes>

<Route
path="/"
element={<LandingPage/>}
/>

<Route
path="/login"
element={<Login/>}
/>

<Route
path="/register"
element={<Register/>}
/>

</Routes>

)

}

export default AppRoutes;