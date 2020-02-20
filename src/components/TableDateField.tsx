import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  value: string
}
const TableDateField: FC<Props> = ({ value }) => (
  <Container>{new Date(value).toLocaleDateString()}</Container>
)

const Container = styled.td`
  white-space: nowrap;
`

export default TableDateField
