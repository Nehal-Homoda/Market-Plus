

export interface Currency {
    id: number
    name: string
    icon: string
    purchasing_price: string
    selling_price: string
    slug: any
    last_updates: string
    status_purchasing_price: string
    status_selling_price: string
}


export interface calculateCurrencyResponse {
    meta: Meta
    success: boolean
  }
  
  export interface Meta {
    message: string
  }