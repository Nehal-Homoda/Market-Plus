export interface GoldResponse{
    data: Gold[]
    success: boolean
    meta: Meta
  }
  
  export interface Gold{
    id: number
    name: string
    icon: string
    purchasing_price: string
    selling_price: string
    slug: any
  }
  
  export interface Meta {
    message: any
  }
  