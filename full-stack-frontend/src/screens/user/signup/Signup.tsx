import * as React from 'react'
import useForm from '../../../hooks/useForm'
import { useHistory } from 'react-router-dom'
import { LoginAndSignupData } from '../../../services/userData/LoginAndSignupData'
import { useUnProtect } from '../../../components/ProtectedRoute/useUnProtect'
import { FormSignup } from '../../../components/formSignup/FormSignup'

export default function Signup() {
    const { form, onChange, resetState } = useForm({ email: "", password: "" })

    const history = useHistory()

    const handleSubmit = (event: any): any => {
        event.preventDefault()
        LoginAndSignupData('/user/signup', form, 'Cadastro realizado com sucesso!', 'Falha ao fazer o cadastro!', history)
        resetState()
    }

    const handleOnChange = (event: any): any => {
        const { name, value } = event.target
        onChange(name, value)
    }

    useUnProtect()
    return (
        <main>
            <FormSignup
                onSubmit={handleSubmit}
                typeName={"name"}
                typeEmail={"email"}
                typeNickname={"nickname"}
                typePassword={"password"}
                nameName={"name"}
                nameEmail={"email"}
                nameNickname={"nickname"}
                namePassword={"password"}
                valueName={form.name}
                valueEmail={form.email}
                valueNickname={form.nickname}
                valuePassword={form.password}
                onChange={handleOnChange}
            />
        </main>
    )
}