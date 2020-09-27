import styled from 'styled-components'

export const Title = styled.h2`
    background-color: black;
    color: white;
    margin-top: 0;
    padding: 0 5px;
`

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;

    > thead {
        background-color: #333;
        color: white;
        td,
        th {
            border-left: 1px solid white;
            border-right: 1px solid white;
        }
    }
    > tbody {
        > tr:nth-child(even) {
            background-color: #eee;
        }
    }
`
