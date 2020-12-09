import * as React from 'react'
import { Main } from './styles'
import error3 from '../../assets/49337.jpg'
import { goToSearchMusic } from '../../router/coordinator'
import { useHistory } from 'react-router-dom'

export default function ErrorPage(): any {
    const history: any = useHistory();

    return (
        <Main>
            <img src={error3} alt="" srcSet={error3} />
            <button onClick={(): void => goToSearchMusic(history)}>Go to Home</button>
        </Main>
    )
}