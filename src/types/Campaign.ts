interface Campaign {
  id: number
  name: string
  campaign_name: string
  adgroup_name: string
  created_at: string
  updated_at: string
  type: 'SearchCampaign' | 'SmartDisplayCampaign' | 'DSACampaign'
  adwords_status: 'running' | 'paused'
  items_count: number
}

export default Campaign
