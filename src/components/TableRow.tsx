import React, { FC } from 'react'
import Campaign from '../types/Campaign'
import styled from 'styled-components'
import CampaignField from '../types/CampaignField'
import TableInputField from './TableInputField'
import TableSelectField from './TableSelectField'
import TableDateField from './TableDateField'

interface Props {
  campaign: Campaign
  activeColumns: CampaignField[]
  onFieldChange: (field: CampaignField, value: Campaign[CampaignField]) => void
}
const TableRow: FC<Props> = ({ campaign, activeColumns, onFieldChange }) => {
  const renderField = (field: CampaignField, campaign: Campaign) => {
    switch (field) {
      case 'name':
        return (
          <TableInputField
            key={field}
            value={campaign[field]}
            onChange={value => onFieldChange(field, value)}
          />
        )

      case 'adwords_status':
        return (
          <TableSelectField
            key={field}
            options={[
              { label: 'Running', value: 'running' },
              { label: 'Paused', value: 'paused' },
            ]}
            value={campaign[field]}
            onChange={value => onFieldChange(field, value)}
          />
        )

      case 'created_at':
      case 'updated_at':
        return <TableDateField key={field} value={campaign[field]} />

      default:
        return <td key={field}>{campaign[field]}</td>
    }
  }

  return (
    <Container>
      {activeColumns.map(field => renderField(field, campaign))}
    </Container>
  )
}

const Container = styled.tr`
  td {
    padding: 8px 12px;
    border-top: 1px solid #eee;
    border-right: 1px solid #eee;

    &:last-child {
      border-right: 0;
    }
  }
`

export default TableRow
