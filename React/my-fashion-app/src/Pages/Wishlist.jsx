function Wishlist ({wishlist,setWishlist}){
    return(
        <div className="wishlist-page">
        <h1>My wishlist</h1>

         {wishlist.length=== 0 ? (
            <p>Your wishlist is empty</p>) : (
                wishlist.map((item) =>(
                    <div key ={item.id}>
                        <img src={item.image} alt={item.name}/>
                        <h3>{item.name}</h3>
                        <p>₹{item.price}</p>

                        <button onClick={() =>setWishlist(
                            wishlist.filter((product) =>product.id !== item.id)
                        )}>Remove</button>
                        </div>
                ))
            )
        }

        </div>
    )
}
export default Wishlist