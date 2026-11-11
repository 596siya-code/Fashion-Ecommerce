import { Link } from "react-router-dom"
function ProductCard({product,onAddToWishlist,onAddToCart}){
    return(
    <div className="product-card">
        <Link to="/product" state={product}>
    <img src={product.image} alt={product.name} />

    <h3>{product.name}</h3>
    <p>₹{product.price}</p>
    <p>{product.description}</p>
    </Link>

    <button onClick={()=>onAddToWishlist(product)}>Add to Wishlist</button>
    <button onClick={()=>onAddToCart(product)}>Add to Cart</button>


    </div>

    )
}
export default  ProductCard