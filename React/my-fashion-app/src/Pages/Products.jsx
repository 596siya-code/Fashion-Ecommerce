import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products({ onAddToWishlist, onAddToCart }) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [price, setPrice] = useState("");
    const [sort, setSort] = useState("default");

    const [searchParams] = useSearchParams();

    const urlSearch = searchParams.get("search") || "";

    useEffect(() => {
        setSearch(urlSearch);
    }, [urlSearch]);


 let filteredProducts = products.filter((product) => {
    return (
        (
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase())
        ) &&
        (category === "All" || product.category === category) &&
        (price === "" || product.price <= Number(price))
    );
});

    if (sort === "low") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <div className="products-page">
            <h1>Our Collection</h1>

            <input
                type="text"
                placeholder="Search products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="All">All Categories</option>
                <option value="Dresses">Dresses</option>
                <option value="Tops">Tops</option>
                <option value="Shirts">Shirts</option>
                <option value="Trousers">Trousers</option>
                <option value="Western Co-ord Sets">Western Co-ord Sets</option>
            </select>

            <input
                type="number"
                placeholder="Maximum Price"
                step="1000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="default">Default</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
            </select>

            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToWishlist={onAddToWishlist}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <p>No products found</p>
            )}
        </div>
    );
}

export default Products;