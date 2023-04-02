import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Image,
  useBreakpointValue 
} from '@chakra-ui/react';
import logo from "../Image/diwa.png"




const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>

      {children}
    </Text>
  );
};
const FootMobile = () => {
  return<Box
  bg={useColorModeValue('gray.50', 'gray.900')}
  color={useColorModeValue('gray.700', 'gray.200')}>
  <Container as={Stack} maxW={'6xl'} py={10}>
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
      <Stack align={'flex-start'}>
        <ListHeader>Product</ListHeader>
        <Link href={'#'}>Overview</Link>
        <Stack direction={'row'} align={'center'} spacing={2}>
          <Link href={'#'}>SHop</Link>
          <Tag
            size={'sm'}
            bg={useColorModeValue('green.300', 'green.800')}
            ml={2}
            color={'white'}>
            New
          </Tag>
        </Stack>
        <Link href={'#'}>Meassge</Link>
        <Link href={'#'}>FAQ</Link>
        <Link href={'#'}>Order Tracking</Link>
      </Stack>
     
      <Stack align={'flex-start'}>
        <ListHeader>Follow Us</ListHeader>
        <Link href={'#'}>Facebook</Link>
        <Link href={'#'}>Twitter</Link>
        <Link href={'#'}>Dribbble</Link>
        <Link href={'#'}>Instagram</Link>
        <Link href={'#'}>LinkedIn</Link>
      </Stack>
    </SimpleGrid>
  </Container>
  <Box py={10}>
    <Flex
      align={'center'}
      _before={{
        content: '""',
        borderBottom: '1px solid',
        borderColor: useColorModeValue('gray.200', 'gray.700'),
        flexGrow: 1,
        mr: 8,
      }}
      _after={{
        content: '""',
        borderBottom: '1px solid',
        borderColor: useColorModeValue('gray.200', 'gray.700'),
        flexGrow: 1,
        ml: 8,
      }}>
      {/* <Logo /> */}
      <Box><Image src={logo} height={"60px"}></Image>
      DiwakarSharma
      </Box>
    </Flex>
    <Text pt={6} fontSize={'sm'} textAlign={'center'}>
      © HEAVENLY HAVEN All rights reserved
    </Text>
  </Box>
</Box>
  
}

export default FootMobile
