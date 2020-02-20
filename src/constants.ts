import CampaignField from './types/CampaignField'

export const CAMPAIGN_FIELDS: CampaignField[] = [
  'id',
  'name',
  'campaign_name',
  'adgroup_name',
  'created_at',
  'updated_at',
  'type',
  'adwords_status',
  'items_count',
]

export const INITIAL_ACTIVE_COLUMNS: CampaignField[] = [
  'id',
  'name',
  'items_count',
  'created_at',
  'updated_at',
]
