import React, { createContext, useState } from 'react'
export const  ContexVal=createContext()
const Contex = ({children}) => {
    const [search,setsearch]=useState(null)
    const [filter,setfilter]=useState(null)
    const [order,setorder]=useState(null)
    const [amout,setamout]=useState(0)
    const searchfun=(val)=>{
        setsearch(val)
    }
    const filterfun=(val)=>{
        setfilter(val)
    }
    const sortfun=(val)=>{
        setorder(val)
    }
    const amoutfun=(val)=>{
      setamout(val)
  }
  return (
    <div>
      <ContexVal.Provider value={{searchfun,filterfun,search,filter,order,sortfun,amoutfun,amout}}>{children}</ContexVal.Provider>
    </div>
  )
}

export default Contex
