import { useEffect } from "react"
import { useState } from "react"
import { useProtect } from "../components/ProtectedRoute/useProtect"
import { GetMusicData } from "../services/musicData/GetMusicData"

const useAxios = (initialState: any, endpoint: string, errorMessage: string) => {
    const [data, setData] = useState(initialState)

    const token = localStorage.getItem("token")

    if (token) {
        useEffect(() => {
            GetMusicData(endpoint, setData, errorMessage)
        }, [endpoint])
    } else {
        useProtect()
    }

    const updateData = () => {
        GetMusicData(endpoint, setData, errorMessage)
    }
    return [data, updateData]
}

export default useAxios