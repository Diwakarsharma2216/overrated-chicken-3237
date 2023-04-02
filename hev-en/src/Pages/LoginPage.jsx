import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Text,
    Box,
    
    
  } from '@chakra-ui/react';
import Footer from '../component/Footer';
import Nav from '../component/Nav';
import { useReducer, useState } from 'react';
import { auth } from './FireAuth';
import {  signInWithEmailAndPassword } from 'firebase/auth'
import { Navigate } from 'react-router-dom';


  const iniitalstate={
    email:"",
    password:""
  }
  const reducer=(state,action)=>{
   switch(action.type){
    case "email":{
      return {...state,
        email:action.payload
      }
    }
    case "password":{
      return {...state,
        password:action.payload
      }
    }
    case "reset":{
      return    iniitalstate
    }
    default:{
    return    iniitalstate
    }
   }
  }
  export default function LoginPage() {
    const [state,dispach]=useReducer(reducer,iniitalstate)
  

 
    const handleclick=async()=>{
      try {
        await signInWithEmailAndPassword(auth,email, password).then((userCredential)=>{
        console.log(userCredential)
          dispach({type:"reset"})
         alert("Login Succesful")
       
        } )
    
      } catch (error) {
        alert("wrong password")
      }
    
    
    }
    const {email,password}=state
    return (<>
    <Nav />
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bgColor="#f7e9fe"
    //   bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
        //   bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=>dispach({type:"email",payload:e.target.value})} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e)=>dispach({type:"password",payload:e.target.value})} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                onClick={handleclick}
                _hover={{
                  bg: 'blue.500',
                 
                }}>
                Log in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
      <Footer />
      </>);
  }