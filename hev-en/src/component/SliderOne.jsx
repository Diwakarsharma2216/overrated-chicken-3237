import React, { useEffect } from 'react'
import { Box, Container, Flex, HStack, Image,useBreakpointValue } 
from "@chakra-ui/react";
import {useState} from "react"
import {ArrowLeftIcon,ArrowRightIcon} from "@chakra-ui/icons"

const SliderOne = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
      {
        id: 1,
        src: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/gun1_7c35f09b-033c-41b9-9488-48b612b9fcf3_1600x.png?v=1677707415",
      },
      {
        id: 2,
        src: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/osaki_exclusive2_1600x.png?v=1677706916",
      },
      {
        id: 3,
        src: "https://cdn.shopify.com/s/files/1/0262/2226/4423/files/newyearbannerm-4_1600x.png?v=1672417784",
      },
    ];
    const handleNavigation = (direction) => {
      if (direction === "next") {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      } else {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      }
    };
    const container=useBreakpointValue(
      {
         base: (<Box   
      
         wdith="20px"
         ml={"45px"}
         mr={"5px"}
         mt="10px"
   
     >
        
    <Image
      src={images[currentImageIndex].src}
      alt="diwa"
      borderRadius="15px"
    height="200px"
    width="300px"
    overflow={"none"}
    />
    <Box
      position="absolute"
      top="400px"
      transform="translateY(-50%)"
      left="20px"
      onClick={() => handleNavigation("prev")}
      cursor="pointer"
    >
      {/* <ArrowLeftIcon /> */}
    </Box>
    <Box
      position="absolute"
      top="90%"
      transform="translateY(-50%)"
      right="20px"
      onClick={() => handleNavigation("next")}
      cursor="pointer"
    >
    {/* <ArrowRightIcon /> */}
    </Box>
    </Box>),
         md: (<Flex   gap='2'  mt="20px"mr="10px" ml="10px">
         <Box 
   height="600px"
   width="50%"
   overflow="hidden" 
   flex='1'
    >
       
   <Image
     src={images[currentImageIndex].src}
     alt=""
     height="600px"
     width="100%"
     borderRadius={"10px"}
   />
   <Box
     position="absolute"
     top="50%"
     transform="translateY(-50%)"
     left="20px"
     onClick={() => handleNavigation("prev")}
     cursor="pointer"
   >
     {/* <ArrowLeftIcon /> */}
   </Box>
   <Box
     position="absolute"
     top="50%"
     transform="translateY(-50%)"
     right="670px"
     onClick={() => handleNavigation("next")}
     cursor="pointer"
   >
   {/* <ArrowRightIcon /> */}
   </Box>
 
 </Box>
 <Box w={"40%"} >
   <Image width="100%" height="600px" src='https://cdn.shopify.com/s/files/1/0262/2226/4423/files/osaki-greatdeals2_1600x.png?v=1670241153' />
 </Box>
 </Flex>) }
      ,
      {
          fallback: 'md',
      },
    )
   
      useEffect(()=>{
       const interval= setInterval(() => {
            handleNavigation("next")
        }, 1500);
        return ()=>clearInterval(interval)
      },[])
  return  container
}

export default SliderOne
