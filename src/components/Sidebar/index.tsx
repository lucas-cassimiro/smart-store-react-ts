import { Container } from "./styles"

import { Link } from "react-router-dom"


export default function Sidebar(){
   return (
     <Container>
       <ul>
         <li>
           <Link to='/iphones'>
             iPhones
           </Link>
         </li>
         <li>
           <Link to='/androids'>
             Androids
           </Link>
         </li>
         <li>
           <Link to='/smartwatchs'>
             Smartwatchs
           </Link>
         </li>
         <li>
           <Link to='/fones-de-ouvido'>
             Fones Bluetooth
           </Link>
         </li>
         <li>
           <Link to='/blackfriday'>
             Black Friday
           </Link>
         </li>
       </ul>
     </Container>
   )




}
