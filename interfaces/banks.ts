export interface BanksResponse {
    data: Bank[]
    success: boolean
    meta: Meta
  }
  
  export interface Bank {
    id: number
    name: string
    icon: any
  }

  export interface Meta {
    message: any
  }
  