import { Button, HStack, VStack,Box } from '@chakra-ui/react'
import React,{useState,useContext} from 'react'
import { ContexVal } from '../Contex/Contex'
const CartCompent = () => {
  const [quan,setquan]=useState(1)
  const {quanfun}=useContext(ContexVal) 
  const handlequan=(val)=>{
    setquan(quan+val)
    quanfun(quan)
  }
  return (
    <div>
      <VStack>
        <Box><HStack><Button onClick={()=>handlequan(-1)} isDisabled={quan===1} variant='outline' colorScheme='teal'>-</Button><Button variant='solid' colorScheme='teal'>1</Button ><Button variant='outline' colorScheme='teal'>+</Button></HStack></Box>
       
        <Box><Button onClick={()=>handlequan(1)} variant='outline' colorScheme='teal'>Remove</Button></Box>
      </VStack>
    </div>
  )
}

export default CartCompent

{/* <Box>
<Text fontSize={{base:"2xl",md:"4xl"}}>ORDER SUMMARY</Text>
<Text>SUBTotal--{5000}</Text>
<Button>C H E C K O U T</Button>
<Text>*enter promo codes at checkout. taxes and shipping</Text>
<Text>calculated at checkout.</Text>
</Box> */}