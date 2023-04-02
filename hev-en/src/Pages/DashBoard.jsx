import React, { useReducer } from 'react'
import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    Stack,
    Text,
    Textarea,
  } from '@chakra-ui/react';

import axios from "axios"
  const iniitalstate={
    title:"",
    description:"",
    price:"",
    img:"",
    quantity:1
  }
  const reducer=(state,action)=>{
   switch(action.type){
    case "title":{
      return {...state,
        title:action.payload
      }
    }
    case "description":{
      return {...state,
        description:action.payload
      }
    }
    case "price":{
        return {...state,
            price:action.payload
        }
      }
      case "img":{
        return {...state,
            img:action.payload
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



const DashBoard = () => {
    const [state,dispach]=useReducer(reducer,iniitalstate)
    const {title,description,price,img}=state
    const handleclick=()=>{
        axios.post(` http://localhost:8080/new`,state).then(()=>{
            alert("Product Added Succesful")
            dispach({type:"reset"})
        })
   
    }
  return (
    <Box bg="gray.100" p={4}>
      <Center>
        <Box maxW="xl" bg="white" p={8} rounded="lg" boxShadow="lg">
          <Stack spacing={4}>
            <Heading size="lg">Product Dashboard</Heading>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5C0qY_uZZFyLIKUPBB3qGkYSPUQ8o16wfxg&usqp=CAU"
              alt="Product Image"
            />
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" name='title' value={title} onChange={(e)=>dispach({type:"title",payload:e.target.value})} placeholder="Product Name" />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea name='description' value={description} onChange={(e)=>dispach({type:"description",payload:e.target.value})} placeholder="Product Description" />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input type="number" name='price' value={price} onChange={(e)=>dispach({type:"price",payload:e.target.value})} placeholder="Product Price" />
            </FormControl>
            <FormControl>
              <FormLabel>Add Product Image</FormLabel>
              <Input type="file" name='img' value={img} onChange={(e)=>dispach({type:"img",payload:e.target.value})} placeholder="Product Price" />
            </FormControl>
            <Button colorScheme="blue" onClick={handleclick}>Save</Button>
          </Stack>
        </Box>
      </Center>
    </Box>
  )
}

export default DashBoard
