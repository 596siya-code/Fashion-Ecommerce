import { useState } from "react";
import { useLocation } from "react-router-dom";

function ProductDetails({onAddToCart}) {
    const location = useLocation();
    const product = location.state;
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className="product-details">

            <div className="details-image">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="details-info">
                <h2>{product.name}</h2>
                <h3>₹{product.price}</h3>
                <p>{product.description}</p>

                <div className="quantity-box">
                    <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>

                <button onClick={() => onAddToCart({...product, quantity})}>
                    Add to cart
                </button>
            </div>

        </div>
    );
}

export default ProductDetails;