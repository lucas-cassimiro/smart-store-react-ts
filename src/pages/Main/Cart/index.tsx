import Screens from './Table'

import { Container } from './styles'

import { Head } from '../../../components/Head'

export default function Cart() {
  return (
    <Container>
      <Head title='Carrinho de compras' />
      <h1>
        <strong>Você está em: </strong>carrinho de compras
      </h1>
      <div>
        <Screens />
      </div>
    </Container>
  )
}
