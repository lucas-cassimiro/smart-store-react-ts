import { Container, Button } from "./styles"

import CartEmpty from "../../assets/carrinho-vazio.jpeg"

interface EmptyCartProps {
  title: string
}

export function EmptyCart({ title }: EmptyCartProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Ir para início</Button>
      <img src={CartEmpty} alt='Boneco com carrinho vazio' />
    </Container>
  )
}
