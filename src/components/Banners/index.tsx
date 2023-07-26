import BBlackFriday from "../../assets/banner-blackfriday.png";
import BWhatsapp from "../../assets/banner-whatsapp.png";

import { Container } from "./styles";


export function BlackFriday(){
    return (
      <Container>
        <img src={BBlackFriday} />
      </Container>
    )
}

export function Whatsapp(){
  return (
    <Container>
      <img src={BWhatsapp} />
    </Container>
  )
}
