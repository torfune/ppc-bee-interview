import React, { FC } from 'react'
import styled from 'styled-components'
import { CAMPAIGN_FIELDS } from '../constants'
import CampaignField from '../types/CampaignField'

interface Props {
  activeColumns: CampaignField[]
  toggleColumn: (column: CampaignField) => void
}
const FilterSection: FC<Props> = ({ activeColumns, toggleColumn }) => (
  <Container>
    <Title>Column Filter</Title>

    {CAMPAIGN_FIELDS.map((field, key) => (
      <FilterItem key={key}>
        <input
          type="checkbox"
          id={field}
          checked={activeColumns.includes(field)}
          onChange={() => toggleColumn(field)}
        />
        <StyledLabel htmlFor={field}>{field}</StyledLabel>
      </FilterItem>
    ))}
  </Container>
)

const Container = styled.div`
  margin-top: 48px;
`
const Title = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  color: #444;
`
const FilterItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`
const StyledLabel = styled.label`
  margin-left: 8px;
`

export default FilterSection
