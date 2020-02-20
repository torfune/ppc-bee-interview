import React, { FC, useState } from 'react'
import styled from 'styled-components'

interface Props {
  value: string
  onChange: (value: string) => void
}
const TableInputField: FC<Props> = ({ value, onChange }) => {
  const [focused, setFocused] = useState(false)

  return (
    <Container background={focused ? '#f4f4f4' : '#fff'}>
      <StyledInput
        value={value}
        onChange={event => onChange(event.currentTarget.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </Container>
  )
}

const Container = styled.td<{ background: string }>`
  background: ${props => props.background};

  :hover {
    background: #f4f4f4;
  }
`
const StyledInput = styled.input`
  border: none;
  font-size: 14px;
  background: transparent;
`

export default TableInputField
