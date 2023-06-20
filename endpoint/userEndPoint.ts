import endpoint from "./Utils"

const  UserAPI = {
    "login": endpoint + "/api/v1/users/login",
    "signup": endpoint + "/api/v1/books/",
    "forgetPassword": endpoint + "/api/v1/users/forgot-password",
}

export default UserAPI;