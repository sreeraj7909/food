import {useSelector} from "react-redux"
import Itemlist from "./Itemlist";
import {useDispatch} from "react-redux"
import { removeFromCart,emptyCart } from "../utils/cartSlice";


const Cart=()=>{
    const itemList=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    const handleRemove=()=>{
        dispatch(removeFromCart())
    }
    const handleEmpty=()=>{
        dispatch(emptyCart())
    }

    return (
        <div className="text-center font-bold text-xl m-4 p-4">
            
              <label>Cart Details:</label>
              <button className="rounded-lg bg-lime-400 text-white p-1 m-2" onClick={handleRemove}>Remove Item</button>
              <button className="rounded-lg bg-lime-400 text-white p-1 m-2" onClick={handleEmpty}>Make Empty</button>
              
            
            <div className="w-6/12 m-auto">
                <Itemlist item={itemList}/>
            </div>
        </div>
    )
}

export default Cart;