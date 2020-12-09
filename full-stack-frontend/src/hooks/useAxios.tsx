import { useEffect } from "react"
import { useState } from "react"
import { AllMusicData } from "../services/musicData/AllMusicData"

const useAxios = (initialState: any, endpoint: any, errorMessage: any) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        AllMusicData(endpoint, setData, errorMessage)
    }, [endpoint])

    const updateData = () => {
        AllMusicData(endpoint, setData, errorMessage)
    }
    return [data, updateData]
}

export default useAxios