import {
    Routes,
    Route,
} from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import RoleSelection from "../pages/Auth/RoleSelection/RoleSelection";

function AppRoutes() {

    return (

        <Routes>

            <Route
                path="/"
                element={<LandingPage />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/select-role"
                element={<RoleSelection />}
            />

            <Route
                path="/register/donor"
                element={<Register />}
            />

            <Route
                path="/register/organization"
                element={<Register />}
            />

            <Route
                path="/register/admin"
                element={<Register />}
            />

        </Routes>

    );

}

export default AppRoutes;