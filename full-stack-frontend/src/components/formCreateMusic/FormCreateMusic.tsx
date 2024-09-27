import * as React from 'react'
import { Inputs } from '../../atomicDesign/inputs/Inputs'
import { Buttons } from '../../atomicDesign/buttons/Buttons'
import { Section } from '../../styles/globalFormStyle'

export default function FormCreateMusic(props: any) {
    return (
        <form onSubmit={props.onSubmit}>
            <Section>
                <Inputs
                    type={"text"}
                    name={props.nameTitle}
                    value={props.valueTitle}
                    onChange={props.onChange}
                    label={"Title"}
                />
                <Inputs
                    type={"text"}
                    name={props.nameFile}
                    value={props.valueFile}
                    onChange={props.onChange}
                    label={"File or Link"}
                />
                <Inputs
                    type={"text"}
                    name={props.nameGenre}
                    value={props.valueGenre}
                    onChange={props.onChange}
                    label={"Genre"}
                />
                <Inputs
                    type={"text"}
                    name={props.nameAlbum}
                    value={props.valueAlbum}
                    onChange={props.onChange}
                    label={"Album"}
                />
                <Inputs
                    type={"text"}
                    name={props.nameAuthor_name}
                    value={props.valueAuthor_name}
                    onChange={props.onChange}
                    label={"Author Name"}
                />
                <Buttons
                    type={"submit"}
                    buttonText={"Criar Música"}
                />
            </Section>
        </form>
    )
}