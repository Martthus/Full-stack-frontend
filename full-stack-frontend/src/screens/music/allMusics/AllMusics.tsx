import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import useAxios from '../../../hooks/useAxios'

export function AllMusics() {
    const [music] = useAxios({}, "/music/all", "Erro ao carregar as músicas")
    return (
        <div>
            {music.length > 0 && music.map((musics: any) => {
                return (
                    <div>
                        <ReactAudioPlayer
                            src={musics.file}
                            autoPlay
                            controls
                            volume={0.1}
                        />
                    </div>
                )
            })}
        </div>
    )
}