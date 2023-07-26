export interface PagesProductsData {
  id: number
  name: string
  price: number
  img: string
  blackFriday?: boolean
  discount?: number
  rating?: number
  storage?: number
  color?: string
  order?: string
  quantity?: number
}

export interface CepData {
  bairro: string
  cep: number
  complemento: string
  ddd: string
  gia: string
  ibge: string
  localidade: string
  logradouro: string
  siafi: string
  uf: string
  price: number
}
