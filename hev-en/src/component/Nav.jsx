import { ReactNode, useContext } from 'react';
import logo from "../Image/diwa.png"
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  LinkBox,
  LinkOverlay 
} from '@chakra-ui/react';
import { MoonIcon, SunIcon,Search2Icon } from '@chakra-ui/icons';
import NavTwo from './NavTwo';
import AllRoutes from '../Routes/AllRoutes';
import { ContexVal } from '../Contex/Contex';



export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {searchfun}=useContext(ContexVal)
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box  
        width={{ base: "16%", md: "10%" }}
 >
  <LinkBox>   <LinkOverlay href='/'><Image src={logo}></Image> </LinkOverlay> </LinkBox></Box>
            <Box   width={{ base: "36%", md: "50%" }}> <InputGroup>
    <InputLeftElement
      children={<Search2Icon color='gray.300' />}
    />
    <Input type='text' onChange={(e)=>searchfun(e.target.value)} placeholder='Search Here..' />
  </InputGroup></Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://lh3.googleusercontent.com/a/AGNmyxbNXPFqXDn1ywak8whPIJ1VLeIJb0ATmiAIMFa7=s96-c-rg-br100'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://lh3.googleusercontent.com/a/AGNmyxbNXPFqXDn1ywak8whPIJ1VLeIJb0ATmiAIMFa7=s96-c-rg-br100'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem><Link href="/singup">Create Customer</Link></MenuItem>
                  <MenuItem><Link href="/login">Login</Link></MenuItem>
                  <MenuItem><Link href="/cart">Cart Page</Link></MenuItem>
                  <MenuItem><Link href="/dashboard">DashBoard</Link></MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <NavTwo />
    
    </>
  );
}