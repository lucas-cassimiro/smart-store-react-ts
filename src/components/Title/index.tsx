import { ReactNode } from "react"

import { Container } from "./styles"

interface TitleProps {
  children: ReactNode
}

export default function Title({ children }: TitleProps){
  return <Container>{children}</Container>
}
