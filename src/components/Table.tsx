import React, { FC, useState } from 'react'
import styled from 'styled-components'
import TableRow from './TableRow'
import { campaignsData } from '../data'
import CampaignField from '../types/CampaignField'
import Campaign from '../types/Campaign'

interface Props {
  activeColumns: CampaignField[]
}
const Table: FC<Props> = ({ activeColumns }) => {
  const [campaigns, setCampaigns] = useState(
    Object.fromEntries(campaignsData.map(campaign => [campaign.id, campaign])),
  )

  const handleCampaignFieldChange = (campaignId: number) => (
    field: CampaignField,
    value: Campaign[CampaignField],
  ) => {
    setCampaigns({
      ...campaigns,
      [campaignId]: {
        ...campaigns[campaignId],
        [field]: value,
      },
    })
  }

  return (
    <Container>
      <Title>Campaign List</Title>

      <ScrollWrapper>
        <StyledTable>
          <thead>
            <tr>
              {activeColumns.map(column => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.values(campaigns).map(campaign => (
              <TableRow
                key={campaign.id}
                campaign={campaign}
                activeColumns={activeColumns}
                onFieldChange={handleCampaignFieldChange(campaign.id)}
              />
            ))}
          </tbody>
        </StyledTable>
      </ScrollWrapper>
    </Container>
  )
}

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
const ScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`
const StyledTable = styled.table`
  border: 1px solid #eee;
  margin-top: 12px;
  font-size: 14px;

  th {
    text-align: left;
    border-right: 1px solid #eee;
    padding: 8px 12px;

    &:last-child {
      border-right: 0;
    }
  }
`

export default Table
