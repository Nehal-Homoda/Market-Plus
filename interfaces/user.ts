export interface UserResponseData {
    data: User
    success: boolean
    meta: Meta
  }
  
  export interface User {
    id: number
    name: any
    email: any
    is_login_by_social: boolean
    country: Country
  }
  
  export interface Country {
    id: number
    name: string
    currency: string
    icon: string
  }
  
  export interface Meta {
    message: string
    token: string
  }