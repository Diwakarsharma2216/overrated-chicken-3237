import React, { useEffect, useState } from 'react'
import {Container,Flex,LinkBox ,LinkOverlay, Text,SimpleGrid, Box, Image } from "@chakra-ui/react"
import axios from "axios"
const getdata=()=>{
    return axios.get(`http://localhost:8080/FeaturedCaterories`)
}
const FeaturedCaterories = () => {
const [data,setdata]=useState([])
// const baseUrl=procee
    const FunFetch=async()=>{
        const data=await getdata()
        setdata(data.data)
    }
    
    useEffect(()=>{
        FunFetch()
    },[])
  return (
    <div>
        <Text textAlign={"center"} color="grey" fontSize="2xl" mt="2%">FEATURED CATEGORIES</Text>
       <SimpleGrid textAlign={"center"}  ml="5%"  mr="5%" spacing={5} columns={{base:2,sm:6,md:6,lg:6,xl:6,"2xl":6}}>
        {data.map((el)=><LinkBox key={el.id} textAlign={"center"} mt="40px">
        <LinkOverlay href={el.id} >
             <Box>
                <Image  textAlign={"center"} borderRadius='full'
              boxSize='90px'
              width="100%"
              height={"180px"}
              overflow={"none"}
              
              src={el.img}
              alt={el.id}></Image>
                <Text>{el.h2}</Text>
             </Box>
             </LinkOverlay>
        </LinkBox >)}
       </SimpleGrid>
    </div>
  )
}

export default FeaturedCaterories
