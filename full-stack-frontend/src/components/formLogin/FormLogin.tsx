import { Button } from '@material-ui/core'
import React from 'react'
import { Inputs } from '../../atomicDesign/inputs/Inputs'

export function FormLogin(props: any) {
    return (
        <form onSubmit={props.onSubmit}>
            <Inputs
                type={props.typeEmail}
                name={props.nameEmail}
                value={props.valueEmail}
                onChange={props.onChange}
                label={"Email"}
            />
            <Inputs
                type={props.typePassword}
                name={props.namePassword}
                value={props.valuePassword}
                onChange={props.onChange}
                label={"Password"}
            />
            <Button type="submit">Login</Button>
        </form>
    )
}