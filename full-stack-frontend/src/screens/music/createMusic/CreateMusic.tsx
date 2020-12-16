import * as React from 'react'
import { useHistory } from 'react-router-dom'
import FormCreateMusic from '../../../components/formCreateMusic/FormCreateMusic'
import { useProtect } from '../../../components/ProtectedRoute/useProtect'
import useForm from '../../../hooks/useForm'
import { PostMusicData } from '../../../services/musicData/PostMusicData'
import { Main, Section } from '../../../styles/globalFormStyle'

export function CreateMusic() {
    const { form, onChange, resetState } = useForm({ title: "", file: "", genre: "", album: "", author_name: "" })

    const history = useHistory()

    const handleOnChange = (event: any): any => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        PostMusicData(`/music/new`, form, "Música criada!", "Não foi possível criar esta música, tente novamente.", history)
        resetState()
    }

    useProtect()

    return (
        <Main>
            <FormCreateMusic
                onSubmit={handleSubmit}
                nameTitle={"title"}
                nameFile={"file"}
                nameGenre={"genre"}
                nameAlbum={"album"}
                nameAuthor_name={"author_name"}
                valueTitle={form.title}
                valueFile={form.file}
                valueGenre={form.genre}
                valueAlbum={form.album}
                valueAuthor_name={form.author_name}
                onChange={handleOnChange}
            />
        </Main>
    )

}