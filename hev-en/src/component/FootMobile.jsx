import React from 'react'
import {Box, Button, Text,Flex, Grid, GridItem, Heading, HStack, Image, Link, VStack, Container} from "@chakra-ui/react"
import logo from "../Image/diwa.png"
const FootMobile = () => {
  return <div >
        <Flex justifyContent={"center"} textAlign="center">
        <VStack gap={2}>
       <Box>
         <Text fontSize='3xl'>Stay in the Loop</Text>
         <Box>Sign Up And be the to Hear about new</Box>
         <Box>Product and promotions</Box>
       </Box>
       <Box>
        <Button width={"100%"} colorScheme={"blue"}>Sign Up Now</Button>
       </Box>
       <Box>
        <HStack spacing={1}>
            <Box><Image  borderRadius='full'
  boxSize='50px'
  src='https://w7.pngwing.com/pngs/963/811/png-transparent-youtube-logo-youtube-red-logo-computer-icons-youtube-television-angle-rectangle-thumbnail.png'
  alt='Dan Abramov'></Image></Box>
            <Box><Image
             borderRadius='full'
             boxSize='50px'
             src='https://w7.pngwing.com/pngs/477/609/png-transparent-logo-computer-icons-instagram-logo-instagram-logo-miscellaneous-text-trademark.png'
             alt='Dan Abramov'></Image></Box>
            <Box><Image
             borderRadius='full'
             boxSize='50px'
             src='https://w7.pngwing.com/pngs/239/740/png-transparent-twitter-logo-icon-twitter-file-logo-social-media-news-thumbnail.png'
             alt='Dan Abramov'></Image></Box>
            <Box><Image
             borderRadius='full'
             boxSize='50px'
             src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'
             alt='Dan Abramov'></Image></Box>
            <Box><Image 
             borderRadius='full'
             boxSize='50px'
             src='https://upload.wikimedia.org/wikipedia/commons/6/61/Wikipedia-logo-transparent.png'
             alt='Dan Abramov'></Image></Box>
        </HStack>
       </Box>
       </VStack>
       </Flex>
       <br />
       <hr color='blue' />
       <Flex justify="center" >
       <Grid templateColumns='repeat(2, 1fr)' >
        <GridItem ml={"20px"}>
              <Text fontSize='3xl'>Shop</Text>
              <Text>HavenlyHeven.COM</Text>
              <Text>Message</Text>
              <Link>FAQ</Link><br />
              <Link>About Us</Link><br />
              <Link>Privacy Policy</Link><br />
             
        </GridItem>
        <GridItem ml={"20px"}>
            <Text fontSize='3xl'>Customer</Text>
            
              <Text>Message Chair Buyers Guide</Text>
              <Link href="/#">Contact Us</Link><br />
              <Link>Order Tracking</Link><br />
              <Link>Return Policy</Link><br />
        </GridItem>
       </Grid>
     </Flex>
     <Container  mt={"20px"} maxW={"100px"}><Image  src={logo} width="120px"></Image></Container>
     <Text textAlign={"center"}>@Diwakar Sharma</Text>
    </div>
  
}

export default FootMobile
