import { useState } from "react";
import Quantityselector from "../components/Quantityselector";

function Cart({cart,setCart}){
    let Total = 0

    return(
     <div className="cart-page">
            <h1>My cart</h1>
            {cart.length === 0 ? (<p>Your cart is empty</p>):(
                cart.map((item) =>{
                Total = Total + item.price * item.quantity
                return(

        <div key={item.id}>
          <img src={item.image} alt={item.name} />
           <h3>{item.name}</h3>
          <p>{item.price}</p>
          
     <button onClick={()=>{

      if (item.quantity>1){
         const updatedCart=cart.map((product)=>
           product.id === item.id ?
           {...product,quantity : product.quantity -1}:product )
             setCart(updatedCart)
                            }
                        }}>-</button>
    

         <span>{item.quantity}</span>
         
          <button onClick={()=>{
            const updatedCart=cart.map((product)=>
              product.id === item.id ?
           {...product,quantity : product.quantity +1}:product )
            setCart(updatedCart)
          }}>+</button>

          <button onClick={()=>
            setCart(cart.filter((product)=> product.id !== item.id))
          }>Remove</button>

                    </div>
                )
                })
            )}

            <h2>Total : ₹{Total}</h2>

            <button disabled ={cart.length === 0} onClick={()=> { alert ("Order Placed succesfully !") ;setCart([])}}>Checkout</button>
        </div>
    )
}
export default Cart