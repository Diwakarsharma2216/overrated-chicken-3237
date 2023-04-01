import React, { useContext } from 'react'
import {HStack,Box,Select} from "@chakra-ui/react"
import { ContexVal } from '../Contex/Contex'
const SelectTag = () => {
  const {filterfun,sortfun}=useContext(ContexVal)
  return <HStack mt={"10px"} textAlign={"center"}>
  <Box >
  <Select placeholder='Filter' onChange={(e)=>filterfun(e.target.value)}>
 <option value='electronic'>Electronic</option>
 <option value='beauty'>Beauty</option>
 <option value='food'>Food</option>
 <option value='cloth'>Cloth</option>
</Select>
  </Box>
  <Box >
  <Select placeholder='Featured' onChange={(e)=>sortfun(e.target.value)}>
 <option value='asc'>Lowest Price</option>
 <option value='desc'>Height Price</option>
 {/* <option value='option3'>Option 3</option> */}
</Select>
  </Box>
</HStack>
}

export default SelectTag
