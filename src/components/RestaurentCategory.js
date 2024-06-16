import { useState } from "react";
import Itemlist from "./Itemlist";


const RestaurentCategory=({data,showItems,setShowIndex})=>{
   
    const [itemon,setItemOn]=useState(false)
    

    const handelClick=()=>{
        setShowIndex()
        setItemOn(!itemon)
    }
  
    return (
        <div>
        <div className="md:w-6/12 w-full mx-auto my-6  shadow-lg bg-gray-50 p-4">
           <div className="flex justify-between cursor-pointer" onClick={handelClick}>
             <span className="font-bold text-lg">
             {data.title}({data.itemCards.length})</span>
             <span>⬇️</span> 
          </div>     
         { showItems && itemon && <Itemlist item={data.itemCards}/>}  
        </div>
        </div>
       

    )
}
export default RestaurentCategory;