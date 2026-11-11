import {useState}from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductsDetails";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup";



function App(){
  const [cart,setCart]= useState([])
  const [wishlist,setWishlist]= useState([])

  function addtoCart(product){
    const existingProduct = cart.find((item) => item.id === product.id)

    if (existingProduct){
      setCart(
        cart.map((item) => item.id === product.id ? {...item ,quantity :
          (product.quantity ||1)
        
        }
       :item)
      )
    }
    else{ 
      setCart([...cart, {...product, quantity : product.quantity || 1 }])
    }
  }

  function addToWishlist(product){
    const existingProduct= wishlist.find(
      (item)=> item.id === product.id
    )

    if(!existingProduct){
      setWishlist([...wishlist,product])
    }
  }

  return(
     
    <BrowserRouter>
   <Navbar/>

   <Routes>

    <Route path="/" element={<Home/>}/>
  <Route path="/products" element={<Products onAddToWishlist ={addToWishlist} onAddToCart={addtoCart} />}/>
  <Route path="/product" element={<ProductDetails onAddToCart ={addtoCart} />}/>
  <Route path="/cart" element={<Cart cart={cart}  setCart={setCart}/>}/>
   <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist}/>}/>
    <Route path="/login" element={<Login/>}/>
   <Route path="/signup" element={<Signup/>}/>
     

   </Routes>

   <Footer/>
    </BrowserRouter>
  )
}
export default App