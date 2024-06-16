import { useEffect, useState } from "react"
import { MENU_URL } from "./constants"
import { useParams } from "react-router-dom"


const useGetRestroMenu=()=>{
    const {resId}=useParams()
    const [resMenu,setResMenu]=useState(null)
    useEffect(()=>{
       getData()
    },[])

    const getData=async ()=>{
        try{
        const data=await fetch(MENU_URL+resId)
        const json=await data.json()
        setResMenu(json)
    }catch(error){console.log(error)
        return null
      } 
}

 return resMenu
}

export default useGetRestroMenu