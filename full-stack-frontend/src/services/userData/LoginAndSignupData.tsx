import axios from "axios"
import { MAIN_URL } from "../../constants/MAIN_URL"
import { goToAllMusics, goToSearchMusic } from "../../router/coordinator"

export const LoginAndSignupData = (endpoint: string, body: object, message: string, errorMessage: any, history: any) => {


    axios.post(`${MAIN_URL}${endpoint}`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            alert(message)
            goToAllMusics(history)
        })
        .catch((error) => {
            alert(errorMessage)
        })
}

