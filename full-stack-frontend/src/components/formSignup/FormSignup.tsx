import { Button } from '@material-ui/core'
import React from 'react'
import { Inputs } from '../../atomicDesign/inputs/Inputs'

export function FormSignup(props: any) {
    return (
        <form onSubmit={props.onSubmit}>
            <Inputs
                type={props.typeName}
                name={props.nameName}
                value={props.valueName}
                onChange={props.onChange}
                label={"Name"}
            />
            <Inputs
                type={props.typeEmail}
                name={props.nameEmail}
                value={props.valueEmail}
                onChange={props.onChange}
                label={"Email"}
            />
            <Inputs
                type={props.typeNickname}
                name={props.nameNickname}
                value={props.valueNickname}
                onChange={props.onChange}
                label={"Nickname"}
            />
            <Inputs
                type={props.typePassword}
                name={props.namePassword}
                value={props.valuePassword}
                onChange={props.onChange}
                label={"Password"}
            />
            <Button type="submit">Signup</Button>
        </form>
    )
}