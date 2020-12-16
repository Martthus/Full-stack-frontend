import * as React from 'react'
import CardMusic from '../../../components/cardMusic/CardMusic'
import { useProtect } from '../../../components/ProtectedRoute/useProtect'
import useAxios from '../../../hooks/useAxios'
import { Main, SectionMusic } from '../../../styles/globalFormStyle'

export function AllMusics() {
    const align = true
    const [music] = useAxios({}, "/music/all", "Erro ao carregar as músicas")
    

    useProtect()

    return (
        <Main draggable="true">
            <SectionMusic >
                {music.length > 0 && music.map((musics: any, index: number) => {
                    console.log(musics.file)
                    return (
                        <CardMusic
                            key={index + 1}
                            title={musics.title}
                            author_name={musics.author_name}
                            file={"https://drive.google.com/file/d/1UjbFPY6IO_WkFwHJy4DPz05q-chtzJWS/view?usp"}
                        />
                    )
                })}
            </SectionMusic>
        </Main>
    )
}