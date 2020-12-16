import styled from 'styled-components'

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: ${props =>
        props.draggable ? "start" : 'center'};
`

export const Section = styled.section`
    display: grid;
    grid-template-rows: auto;
    row-gap: 16px;
    justify-items: center;
`

export const SectionMusic = styled.section`
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-auto-rows: auto;
    grid-column: auto;
    grid-row: auto;
    column-gap: 16px;
    row-gap: 16px;
    justify-items: center;
    align-items: start;
`