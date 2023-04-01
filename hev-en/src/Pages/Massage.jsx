import { Heading, Image, LinkBox, LinkOverlay,SimpleGrid, Text , Stack,Box, Spinner} from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Footer from '../component/Footer'
import Nav from '../component/Nav'
import SelectTag from '../component/SelectTag'
import { ContexVal } from '../Contex/Contex'


const Massage = () => {
  const [data,setdata]=useState([])
  const [load,setload]=useState(false)
  const {search,filter,order}=useContext(ContexVal)
  const getdata=()=>{
    return axios.get(`http://localhost:8080/massage`,{
      params:{
        _page:1,
        _limit:28,
        q:search,
        categroy:filter,
        _sort:"price",
        _order:order
      }
    })
  }
  const fetchfun=async()=>{
    setload(true)
    try {
      const data =await getdata()
      setdata(data.data)
      setload(false)
      console.log(filter)
    } catch (error) {
      console.log(error)
    }
   
  }
  useEffect(()=>{
    const interval=setTimeout(() => {
      fetchfun()
    }, 800);
    return ()=>clearTimeout(interval)
  },[search,filter,order])
  return (
    <div>
      <Nav />
     { load ? <Box textAlign={"center"} mt="2%"> <Spinner   thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'/></Box> : <SimpleGrid  ml="5%"  mr="5%" mt={"5%"} gap={"5px"}  columns={{base:1,sm:4,md:4,lg:4,xl:4,"2xl":4}}>
       {data.map((el)=><LinkBox boxSize='m' textAlign={"center"}  >
       <LinkOverlay  href={`/massage/${el.id}`}>
       <Box
        role={'group'}
        p={6}
        maxW={'100%'}
        w={'full'}
         
        boxShadow={'2xl'}
        rounded={'lg'}
        // pos={'relative'}
        // zIndex={1}
        >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${el.img})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={"100%"}
            width={"100%"}
            // objectFit={'cover'}
            src={el.image}
            mt={"10%"}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
          {el.title?.split(" ").slice(0,5).join(" ")}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
            {el.price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
             {el.price+500}
            </Text>
          </Stack>
        </Stack>
      </Box>

       </LinkOverlay>
       </LinkBox>)}
       </SimpleGrid> }
      <Footer />
    </div>
  )
}

export default Massage
