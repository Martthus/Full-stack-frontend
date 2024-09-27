import { Button } from '@material-ui/core'
import React from 'react'
import { Buttons } from '../../atomicDesign/buttons/Buttons'
import { Inputs } from '../../atomicDesign/inputs/Inputs'
import { Section } from '../../styles/globalFormStyle'

export function FormSignup(props: any) {
    return (
        <form onSubmit={props.onSubmit}>
            <Section>
                <Inputs
                    type={"name"}
                    name={props.nameName}
                    value={props.valueName}
                    onChange={props.onChange}
                    label={"Name"}
                />
                <Inputs
                    type={"email"}
                    name={props.nameEmail}
                    value={props.valueEmail}
                    onChange={props.onChange}
                    label={"Email"}
                />
                <Inputs
                    type={"nickname"}
                    name={props.nameNickname}
                    value={props.valueNickname}
                    onChange={props.onChange}
                    label={"Nickname"}
                />
                <Inputs
                    type={"password"}
                    name={props.namePassword}
                    value={props.valuePassword}
                    onChange={props.onChange}
                    label={"Password"}
                />
                <Buttons
                    type={"submit"}
                    buttonText={"Register"}
                />
            </Section>
        </form>
    )
}