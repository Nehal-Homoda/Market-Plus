export interface countryResponse{
  data: country[]
  success: boolean
  meta: Meta
}

export interface country {
  id: number
  name: string
  currency?: string
  icon?: string
}

export interface Meta {
  message: any
}

