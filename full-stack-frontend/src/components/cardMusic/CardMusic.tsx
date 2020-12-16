import * as React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { CardStyle } from '../../styles/stylesMaterialUi'
import { AudioCard } from './style'

export default function CardMusic(props: any) {
    return (
        <CardStyle >
            <h4>
                {props.title}
            </h4>
            <p>
                {props.author_name}
            </p>

            <AudioCard>
                <ReactAudioPlayer
                    controls={true}
                    autoPlay={false}
                    volume={0.5}
                    src={props.file}
                    preload={'auto'}
                />
            </AudioCard>
        </CardStyle>
    )
}