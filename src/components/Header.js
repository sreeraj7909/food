import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import {useSelector} from "react-redux"
import useNetworkStatus from "../utils/useNetworkStatus";
const Header=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    const onlineStatus=useNetworkStatus()
    return (
     <div className="flex  justify-between shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500  md:h-36 h-32  items-center w-full">
        <div className="mx-0 md:mx-0">
              <img className=" mx-0 w-36 md:mx-24 md:h-40 mt-4 md:mt-1 " src={LOGO_URL} alt="logo" />
        </div>
        <div className="p-2 m-0 md:mx-32    justify-between">
            <ul className="flex">
           
            <li className="md:px-4 text-white">Online Status:{onlineStatus?"🟢":"🔴"}</li>
                    <li className="md:px-4 px-1 text-white"><Link to={"/"}>Home</Link></li>
                    <li className="md:px-4 px-1 text-white"><Link to={"/about"}>About</Link></li>
                    <li className="md:px-4 px-1 flex  "><Link className="flex" to={"/cart"}><p className="text-white">Cart:</p><label className="text-white ">({cartItems.length} items)</label></Link></li>
            </ul>
        </div>
    </div>      
    )
}
export default Header;