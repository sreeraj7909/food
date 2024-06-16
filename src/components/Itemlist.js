import { CDN_URL } from "../utils/constants"
import {useDispatch} from "react-redux"
import { addToCart } from "../utils/cartSlice"


const Itemlist=({item})=>{
   
    const dispatch=useDispatch()
  const handleAddItem=(item)=>{
    //dispatch an action
    dispatch(addToCart(item))
    
  }


   
  
  
  
      return(
            <div>
             {
  
              
              item.map((item)=><div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                   
                     <div className="w-9/12 "> 
                        <div className="py-2">
                        
                         <span >{item.card.info.name}</span>
                         <div> <span>₹{item.card.info.price/100}</span></div>
                         <div className="text-green-800"> <span>⭐{item.card.info.ratings.aggregatedRating.rating}</span></div>
                        
                        </div>
                        <p className="text-xs">{item.card.info.description}</p> 
                      </div>  
                        
                        <div className=" w-3/12 p-2 "> 
                          
                          <div className="absolute">
                           
                           <button className="p-2 mx-14 my-24 text-green-400 rounded-lg bg-white shadow-lg  m-auto" onClick={()=>handleAddItem(item)}>Add+</button>
                        
                         </div>
                         < img className="rounded-lg w-30" src={CDN_URL+item.card.info.imageId}/>
                  </div>
              </div>)
             }
          </div>
      )
  }
  
  
  export default Itemlist