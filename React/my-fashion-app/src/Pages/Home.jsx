import {Link} from "react-router-dom" ;
import products from "../data/products";
// import heroImage from "../assets/hero.1.jpg";
import ProductCard from "../components/ProductCard";
import heroImage from "../assets/AI Prompt for Editorial Fashion Photos.jpg"


function Home(){
    return(

    <main className="home">

   {/* HeroSection */}
  <section className="hero">
    <div className="hero-content">
  <p>The New Season</p>

  <h1>Elegance , in <br /> every detail.</h1>

  <p>Timeless pieces .Thoughtful design
    A wardrobe that feels effortlessely you.
  </p>

  <Link to="/products">Discover the collection</Link>
    </div>

    <div className="hero-image">
        <img src={heroImage} alt="aurel new season collection" />
    </div>

</section>

{/* benifits section */}

<section className="benefits">

<p>Complimentary shipping above ₹4,500</p>
<p>Designed with thoughtful details</p>
<p>Easy 30-day returns</p>
</section>


{/* Curated collection */}
<section className="curated">
<p>the aurel edit</p>
<h2>Your style,beautifully considered</h2>

<div className="product-grid">
    {products.slice(0, 4 ).map((product)=>(
    <ProductCard key={product.id} product={product}/>))}

</div>

<Link to="/products">Shop all new arrivals</Link>
</section>

{/* editorial Section */}

<div className="editorial-card">
    <img src={products[10]?.image} alt="aurel dress collection" />

    <h2>The Art of Everyday Dressing</h2>
    <Link to="/products">Explore Dresses </Link>
 </div>


<div className="editorial-card">
    <img
        src={products[18]?.image}
        alt="Co-ord Sets"
    />
    <h2>Perfectly Put Together</h2>
    <Link to="/products">Explore dresses</Link>
</div>
</main>
)}
export default Home