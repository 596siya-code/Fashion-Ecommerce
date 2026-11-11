// import dress1 from "../assets/download (2).jpg";
//  import dress1 from "../assets/image.jpg"
import dress1 from "../assets/download(2).jpg"
import dress2 from "../assets/download (6).jpg";
import dress3 from "../assets/Ivory Textured Halter Midi Dress.jpg";
import dress4 from "../assets/download (1).jpg";
import dress5 from "../assets/Lightweight Tops for Women for Summer Fashion.jpg"
import dress6 from "../assets/Women's Neutrals Nataly Collar Pleated Fitted Striped Shirt- Multi Color _ Extra Large _ Exquise.jpg"
import dress7 from "../assets/Anewsta Women's Bowknot Tie Collar Long Sleeve Elegant Commuter Blouse, Fashion.jpg"
import dress8 from "../assets/Gouden NEO NOIR Blouses FAIRY DRAPY SATIN BLOUSE _ Omoda.jpg"
import dress9 from "../assets/Ready to Wear Designer Collection _ Women's Luxury Fashion.jpg"
import dress10 from "../assets/Style a Silk Shirt_ 8 Fresh Looks You’ll Love.jpg"
import dress11 from "../assets/IVORY DRAPEY MODAL BLEND BLOUSON SLEEVE SHIRT.jpg"
import dress12 from "../assets/White Long Collar Embellished Satin Shirt _ Long-Collar Satin Shirts.jpg"
import dress13 from "../assets/download (7).jpg"
import dress14 from "../assets/30 How to Style Cargo Pants in Spring_ Fresh Easy___.jpg"
import dress15 from "../assets/Formal Straight Trousers for Women’s Wardrobe Essential.jpg"
import dress16 from "../assets/Elegant Neutral Wide-Leg Outfit Ideas for Women 🤎.jpg"
 import dress17 from "../assets/Taupe Brown Co-ord Set 🍁✨.jpg"
import  dress18 from "../assets/download.jpg"
import dress19 from "../assets/Co-ord set.jpg"
import dress20 from "../assets/Pinstripe Crop Top and High-Waist Suit Pants.jpg"
 const products = [
  // DRESSES
  {
    id: 1,
    name: "Burgundy Draped Gown",
    type: "Sleeveless Evening Gown",
    category: "Dresses",
    price: 4299,
    image: dress1,
    description: "A refined burgundy evening gown with an elegant draped neckline and a graceful floor-length silhouette."
  },
  {
    id: 2,
    name: "Olive Satin Column Dress",
    type: "Off-Shoulder Maxi Dress",
    category: "Dresses",
    price: 3999,
    image: dress2,
    description: "A sleek olive-green satin maxi dress with an off-shoulder neckline and a clean, elegant silhouette."
  },
  {
    id: 3,
    name: "Ivory Tiered Maxi Dress",
    type: "High-Neck Maxi Dress",
    category: "Dresses",
    price: 3799,
    image: dress3,
    description: "An ivory full-length dress with a high neckline, softly gathered waist and tiered flowing skirt."
  },
  {
    id: 4,
    name: "Champagne Satin Slip Dress",
    type: "Satin Slip Dress",
    category: "Dresses",
    price: 3599,
    image: dress4,
    description: "A champagne satin slip dress styled with a clean ivory blazer for an elevated evening look."
  },

  // TOPS
  {
    id: 5,
    name: "Ivory Lace Wrap Top",
    type: "Lace-Trim Wrap Top",
    category: "Tops",
    price: 1899,
    image: dress5,
    description: "A soft ivory wrap-style top finished with delicate lace detailing along the neckline."
  },
  {
    id: 6,
    name: "Beige Striped Peplum Top",
    type: "Striped Peplum Top",
    category: "Tops",
    price: 1999,
    image: dress6,
    description: "A tailored striped top with short sleeves, a button front and a gently shaped peplum waist."
  },
  {
    id: 7,
    name: "Ivory Bow-Detail Blouse",
    type: "Bow-Neck Blouse",
    category: "Tops",
    price: 2299,
    image: dress7,
    description: "An elegant ivory blouse with a soft bow neckline, long sleeves and delicate draping."
  },
  {
    id: 8,
    name: "Champagne Draped Blouse",
    type: "Draped Long-Sleeve Top",
    category: "Tops",
    price: 2199,
    image: dress8,
    description: "A champagne-toned blouse featuring a softly draped neckline and a fluid, polished finish."
  },

  // SHIRTS
  {
    id: 9,
    name: "Ivory Pinstripe Tie-Front Shirt",
    type: "Striped Tie-Front Shirt",
    category: "Shirts",
    price: 2299,
    image: dress9,
    description: "A light pinstripe shirt with a classic collar, relaxed sleeves and a long tie-front detail."
  },
  {
    id: 10,
    name: "Classic Ivory Button-Down Shirt",
    type: "Relaxed Button-Down Shirt",
    category: "Shirts",
    price: 1999,
    image: dress10,
    description: "A timeless ivory button-down shirt with a relaxed fit and clean minimal styling."
  },
  {
    id: 11,
    name: "White Puff-Sleeve Blouse",
    type: "Short Puff-Sleeve Blouse",
    category: "Shirts",
    price: 1899,
    image: dress11,
    description: "A crisp white blouse with voluminous short sleeves and a simple open neckline."
  },
  {
    id: 12,
    name: "White Statement-Collar Shirt",
    type: "Long-Sleeve Shirt",
    category: "Shirts",
    price: 2199,
    image: dress12,
    description: "A polished white shirt with an oversized pointed collar, button front and softly gathered sleeves."
  },
  // TROUSERS
{
  id: 13,
  name: "Espresso Brown Bootcut Trousers",
  type: "Bootcut Trousers",
  category: "Trousers",
  price: 2899,
  image: dress13,
  description: "Elegant espresso-brown high-waist bootcut trousers with subtle belt detailing and a gently flared hem."
},
{
  id: 14,
  name: "Sand Beige Cargo Trousers",
  type: "Cargo Trousers",
  category: "Trousers",
  price: 2699,
  image: dress14,
  description: "Relaxed beige cargo trousers featuring practical side pockets and a contemporary fit."
},
{
  id: 15,
  name: "Stone Grey Straight-Fit Trousers",
  type: "Straight-Fit Trousers",
  category: "Trousers",
  price: 2599,
  image: dress15,
  description: "Sophisticated stone-grey tailored trousers with a clean straight-leg cut and front pleats."
},
{
  id: 16,
  name: "Taupe Wide-Leg Trousers",
  type: "Wide-Leg Trousers",
  category: "Trousers",
  price: 2699,
  image: dress16,
  description: "Elegant taupe high-waist trousers with front pleats and a flowing wide-leg silhouette."
},

// WESTERN CO-ORD SETS
  {
    id: 17,
    name: "Mocha Corset & Trouser Set",
    type: "Structured Top and Trouser Set",
    category: "Co-ord Sets",
    price: 4499,
    image: dress17,
    description: "A coordinated mocha outfit featuring a structured sleeveless top and matching wide-leg trousers."
  },
  {
    id: 18,
    name: "Ivory Corset & Trouser Set",
    type: "Corset Top and Trouser Set",
    category: "Co-ord Sets",
    price: 4699,
    image: dress18,
    description: "A minimal ivory two-piece look with a structured strapless top and matching tailored trousers."
  },
  {
    id: 19,
    name: "Sage Waistcoat Trouser Set",
    type: "Waistcoat and Trouser Set",
    category: "Co-ord Sets",
    price: 4299,
    image: dress19,
    description: "A soft sage two-piece set with a button-front waistcoat layered over a white blouse and matching trousers."
  },
  {
    id: 20,
    name: "Charcoal Pinstripe Set",
    type: "Sleeveless Top and Trouser Set",
    category: "Co-ord Sets",
    price: 4399,
    image: dress20,
    description: "A coordinated charcoal pinstripe outfit featuring a sleeveless top and matching wide-leg trousers."
  }]


export default products