import axios from "axios"
import { headersCors } from "../../constants/headersCors"
import { MAIN_URL } from "../../constants/MAIN_URL"

export const GetMusicData = (endpoint: string, setData: any, errorMessage: string): void => {
    axios.get(`${MAIN_URL}${endpoint}`, headersCors)
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            alert(errorMessage)
        })
}

