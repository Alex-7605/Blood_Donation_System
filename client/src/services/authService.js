import api from "../api/axios";

class AuthService {

    async register(data) {

        const response = await api.post(

            "/auth/register",

            data

        );

        return response.data;

    }

    async login(email, password) {

        const response = await api.post(

            "/auth/login",

            {

                email,

                password,

            }

        );

        return response.data;

    }

    async me() {

        const response = await api.get(

            "/auth/me"

        );

        return response.data;

    }

    async logout() {

        const response = await api.post(

            "/auth/logout"

        );

        return response.data;

    }

}

export default new AuthService();