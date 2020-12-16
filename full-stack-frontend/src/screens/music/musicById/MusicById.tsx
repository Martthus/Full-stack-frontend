import * as React from 'react'
import { useParams } from 'react-router-dom'
import { ParamsTypes } from '../../../constants/types-interface/paramsTypes'
import useAxios from '../../../hooks/useAxios'

export default function MusicById() {
    const { music_id } = useParams<ParamsTypes>()
    const [music] = useAxios({}, `/music/${music_id}`, "Erro ao encontrar a música.")

    return (
        <div>
            {music.author_name}
        </div>
    )
}