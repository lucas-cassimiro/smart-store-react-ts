import { Outlet } from "react-router-dom";

import { Container } from "./styles";

import Header from "../../components/Topside";
import Footer from "../../components/Footer";

export default function Main(){
  return (
    <Container>
      <Header/>
      <section>
        <Outlet />
      </section>
      <Footer />
    </Container>
  )
}
