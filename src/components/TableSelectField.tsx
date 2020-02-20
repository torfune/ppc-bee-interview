import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  options: Array<{ value: string; label: string }>
  value: string
  onChange: (value: string) => void
}
const TableSelectField: FC<Props> = ({ options, value, onChange }) => (
  <td>
    <StyledSelect
      value={value}
      onChange={event => onChange(event.currentTarget.value)}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  </td>
)

const StyledSelect = styled.select`
  font-size: 14px;
`

export default TableSelectField
