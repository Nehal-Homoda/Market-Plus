export interface SilverResponse{
    data: Silver[]
    success: boolean
    meta: Meta
  }
  
  export interface Silver{
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
  