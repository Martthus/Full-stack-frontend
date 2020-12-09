import axios from "axios"
import { MAIN_URL } from "../../constants/MAIN_URL"
import { goToSearchMusic } from "../../router/coordinator"

export const LoginAndSignupData = (endpoint: any, body: any, message: any, errorMessage: any, history: any) => {
    axios.post(`${MAIN_URL}${endpoint}`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            alert(message)
            goToSearchMusic(history)
        })
        .catch((error) => {
            alert(errorMessage)
        })
}

