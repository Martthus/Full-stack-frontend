import * as React from 'react'
import useForm from '../../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { LoginAndSignupData } from '../../../services/userData/LoginAndSignupData'
import { useUnProtect } from '../../../components/ProtectedRoute/useUnProtect'
import { FormLogin } from '../../../components/formLogin/FormLogin'
import { Main } from './style'

export default function Login(): any {
    const { form, onChange, resetState } = useForm({ email: "", password: "" })

    const history = useHistory()

    const handleSubmit = (event: any): any => {
        event.preventDefault()
        LoginAndSignupData('/user/login', form, 'Login efetuado com sucesso!', 'Falha ao fazer o login!', history)
        resetState()
    }

    const handleOnChange = (event: any): any => {
        const { name, value } = event.target
        onChange(name, value)
    }

    useUnProtect()

    return (
        <Main>
            <section>
                <FormLogin
                    onSubmit={handleSubmit}
                    nameEmail="email"
                    namePassword="password"
                    valueEmail={form.email}
                    valuePassword={form.password}
                    onChange={handleOnChange}
                />
            </section>
        </Main>
    )
}