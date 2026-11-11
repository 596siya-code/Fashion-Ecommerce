import {Link} from "react-router-dom"
function Footer(){
    return(
     <footer>
        <div>
            <h2>Aurel</h2>
            <p>Timeless fashion , effortless elegance</p>
        </div>

        <div>
            <h3>Explore aurel</h3>
            <Link to="/">Home</Link>
            <Link to ="/products">New Arrivals</Link>
            <Link to="/products">The essentials</Link>
        </div>

        <div>
            <h3>contact</h3>
            <p>Contact@aurel.com</p>
        </div>
        
        <p>&copy; 2026 Aurel . All Rights Reserved</p>
     </footer>

    )
}

export default Footer