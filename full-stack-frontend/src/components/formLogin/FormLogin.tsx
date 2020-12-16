import React from 'react'
import { Buttons } from '../../atomicDesign/buttons/Buttons'
import { Inputs } from '../../atomicDesign/inputs/Inputs'
import { Section } from '../../styles/globalFormStyle'

export function FormLogin(props: any) {
    return (
        <form onSubmit={props.onSubmit}>
            <Section>
                <Inputs
                    type={"email"}
                    name={props.nameEmail}
                    value={props.valueEmail}
                    onChange={props.onChange}
                    label={"Email"}
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
                    buttonText={"Login"}
                />
            </Section>
        </form>
    )
}