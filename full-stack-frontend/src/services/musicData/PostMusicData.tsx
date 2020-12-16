import * as React from 'react'
import axios from "axios"
import { MAIN_URL } from '../../constants/MAIN_URL'
import { goToAllMusics } from '../../router/coordinator'
import { headersCors } from '../../constants/headersCors'


export const PostMusicData = (endpoint: string, body: object, message: string, errorMessage: string, history: any): void => {

    axios.post(`${MAIN_URL}${endpoint}`, body, headersCors)
        .then((response) => {
            const decision = confirm(`${message} Gostaria de ver todas as músicas criadas?`)
            if (decision) {
                goToAllMusics(history)
            }
        })
        .catch((error) => {
            alert(errorMessage)
        })
}