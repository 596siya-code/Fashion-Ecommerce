import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar(){
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    function handleSearch(e){
        e.preventDefault();

        if(search.trim()){
            navigate(`/products?search=${search}`);
        }
    }

    return(
        <>
        <div>
            Complimentary Shipping on orders above ₹4,500
        </div>

        <header>
            <div>
                <Link to="/">Home</Link>

                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>

                <div>
                    <Link to="/login">Account</Link>
                    <Link to="/Wishlist">Wishlist</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            </div>

            <nav>
                <Link to="/products">New Arrivals</Link>
                <Link to="/products">The Essentials</Link>
            </nav>
        </header>
        </>
    )
}

export default Navbar;