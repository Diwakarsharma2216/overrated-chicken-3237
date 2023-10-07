import { Button,HStack,Image,Spinner,Box, VStack,Container,Text,Grid,Heading } from "@chakra-ui/react";
import Footer from "../component/Footer";
import axios from "axios";
import Nav from "../component/Nav";
import { useContext, useEffect, useState } from "react";

import { ContexVal } from "../Contex/Contex";
import Payment from "./Payment";


function CartPage() {
  const [data,setdata]=useState([])
  const [load,setload]=useState(false)
  const {amoutfun} =useContext(ContexVal)
  const [check,setcheck]=useState(false)
  const baseURL=process.env.REACT_APP_BASEURL
  let totalprice=0
 
  const getdata=()=>{
    return axios.get(`${baseURL}/cartdata`)
  }

  const fetchfun=async()=>{
    setload(true)
    try {
      const data =await getdata()
      setdata(data.data)
      setload(false)
    } catch (error) {
      console.log(error)
    }
   
  }
  const handlequan=(id,val)=>{
    let newdata=data.map((el)=>el.id===id ? {...el,quantity:el.quantity+val}: el)
    setdata(newdata)
    amoutfun(totalprice)
}
const handledeleta=(id)=>{
 axios.delete(`${baseURL}/cartdata/${id}`).then(()=>{
  fetchfun()
  amoutfun(totalprice)
 })
}

 { data.forEach((el)=>totalprice+=el.price*el.quantity)}

  useEffect(()=>{
      fetchfun()
      amoutfun(totalprice)
    
  },[])
  return (
    <div>
        <Nav />
        { load ? <Box textAlign={"center"} mt="2%"> <Spinner   thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'/></Box> : <Box>
  <Container maxW="container.xl">
    <Heading as="h1" fontSize={["2xl", "4xl"]} my="4">
       CA-rt
    </Heading>
   <Grid templateColumns={["1fr", "1fr 1fr"]} gap="4">
    {data.map((el)=> <Box  bg='#eaebff' key={el.id}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box p="6">

            <Box d="flex" alignItems="baseline">
              <Image  src={el.img}  w={{base:"100px",md:"200px"}} />
              <Text fontSize="xl" fontWeight="semibold" mr="2" color="gray.600">
              {el.title?.split(" ").slice(0,5).join(" ")}
              </Text>
              <Text fontSize="lg" color="gray.600">
              ₹{el.price}
              </Text>
            </Box>

            <Box d="flex" alignItems="baseline" mt="2">
              <Text mr="2" color="gray.600">Quantity:</Text>
              <Text fontWeight="semibold" color="gray.600">{el.quantity}</Text>
            </Box>
          </Box>
          <div>
       <VStack>
        <Box><HStack><Button  isDisabled={el.quantity===1} onClick={()=>handlequan(el.id,-1)} variant='outline' colorScheme='teal'>-</Button>
        <Button variant='solid' colorScheme='teal'>{el.quantity}</Button >
        <Button onClick={()=>handlequan(el.id,1)} variant='outline' colorScheme='teal'>+</Button>
        </HStack></Box>
       
        <Box><Button  variant='outline' onClick={()=>handledeleta(el.id)} colorScheme='teal'>Remove</Button></Box>
      </VStack>
    </div>
        </Box>
       
      </Box> )}
       
    </Grid> 
  </Container>
</Box> 
     
  }
     <Box textAlign={"center"} mt={"2%"} >
  <Text fontSize={{base:"4xl",md:"2xl"}}>ORDER SUMMARY</Text>
 <Text fontSize={{base:"2xl",md:"4xl"}}>SUBTotal--₹{totalprice }</Text>
 <Button onClick={()=>setcheck(!check)} variant='outline' colorScheme='teal'>{ check ? <Payment /> :  "C H E C K O U T"}</Button>
 <Text>*enter promo codes at checkout. taxes and shipping</Text>
 <Text>calculated at checkout.</Text>
 </Box> 
  <Footer />
   </div>
  );
}

export default CartPage;