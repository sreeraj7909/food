import { useState } from "react";
import useGetRestroMenu from "../utils/useRestroMenu";
import {useParams} from "react-router-dom";
import RestaurentCategory from "./RestaurentCategory";
import Shimmer from "./Shimmer";




const RestroMenu=()=>{
    const [showIndex,setShowIndex]=useState(null)

    
    const {resId}=useParams()
    
    const restromenu=useGetRestroMenu(resId)
    if(restromenu===null) return <Shimmer/>
    
    
    const {name,cloudinaryImageId,costForTwoMessage,avgRating,cuisines}=restromenu?.data?.cards[2]?.card?.card?.info
    
    
    const itemList=restromenu.data.cards.filter((res)=>res.groupedCard)
   
    const categories=

    itemList[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((res)=>

        res?.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

    )
  
    
    
    return(
        <div className="text-center -my-5  h-screen">
           <h2 className="font-bold m-4 pt-11 text-2xl  ">{name}</h2>
           <p className="font-bold text-xl">{cuisines.join(",")}</p>
           
             { categories.map((category,index)=> <RestaurentCategory key={category?.card?.card.title} 
             data={category?.card?.card} showItems={index===showIndex ? true : false}
             setShowIndex={()=>setShowIndex(index)}/>)}
        </div>
    )
}
export default RestroMenu;