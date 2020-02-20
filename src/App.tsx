import React, { useState } from 'react'
import FilterSection from './components/FilterSection'
import Table from './components/Table'
import styled from 'styled-components'
import { INITIAL_ACTIVE_COLUMNS, CAMPAIGN_FIELDS } from './constants'
import CampaignField from './types/CampaignField'

const App = () => {
  const [activeColumns, setActiveColumns] = useState(INITIAL_ACTIVE_COLUMNS)

  const toggleColumn = (column: CampaignField) => {
    if (activeColumns.includes(column)) {
      setActiveColumns(activeColumns.filter(ac => ac !== column))
    } else {
      setActiveColumns(
        CAMPAIGN_FIELDS.filter(
          field => activeColumns.includes(field) || field === column,
        ),
      )
    }
  }

  return (
    <>
      <Title>PPC Bee</Title>
      <SubTitle>interview app</SubTitle>

      <FilterSection
        activeColumns={activeColumns}
        toggleColumn={toggleColumn}
      />

      <Table activeColumns={activeColumns} />
    </>
  )
}

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`
const SubTitle = styled.h2`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  text-align: center;
  margin-top: 4px;
  color: #888;
`

export default App
