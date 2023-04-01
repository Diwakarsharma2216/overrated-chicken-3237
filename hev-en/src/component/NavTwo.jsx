import React, { useContext } from 'react'
import { ContexVal } from '../Contex/Contex'
import {Container,useBreakpointValue } from "@chakra-ui/react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box,
  HStack,
  Select 
} from '@chakra-ui/react'
import SelectTag from './SelectTag'
const NavTwo = () => {
  const {filterfun}=useContext(ContexVal)
  const containervalue=useBreakpointValue (
    {
    base: <Container >
    <Box marginLeft={"30%"} mt="10px">
<Breadcrumb>
<BreadcrumbItem>
  <BreadcrumbLink href='/'>Home</BreadcrumbLink>
 </BreadcrumbItem>

<BreadcrumbItem>
   <BreadcrumbLink href='/new'>New</BreadcrumbLink>
</BreadcrumbItem>
<BreadcrumbItem>
   <BreadcrumbLink href='/massage'>Massage</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
</Box>
<SelectTag />
  </Container>,
// mid container is here!
    md:<Container maxW={"800px"} mt={2}>
    <Breadcrumb separator=' '  spacing='18px'>
  <BreadcrumbItem>
    <BreadcrumbLink href='/new'>New</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/massage'>Massage</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='/wellness'>Wellness</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href='/sleep'>Sleep</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/home'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='/traval'>Traval</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href='/fitness'>Fitness</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/tecnology'>Tecnology</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='/gift'>Gift</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
{/* select mid part here! */}
<SelectTag />
  </Container>
  },
  {
    fallback: 'md',
  }
  )
  return (
    <div>
    {containervalue}
    </div>
  )
}

export default NavTwo
