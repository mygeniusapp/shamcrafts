import { useState } from 'react'
import { Star, User, ShoppingBag } from 'lucide-react'
import AIProductVisualizer from '../components/AIProductVisualizer'
import potteryImg from '../assets/images/pottery.jpg'

const ProductDetailPage = () => {
  const product = {
    id: 1,
    name: "Handcrafted Syrian Pottery Vase",
    price: 45.00,
    description: "Authentic pottery from Damascus, hand-thrown and painted with natural earth pigments. Each piece is unique.",
    images: [potteryImg, potteryImg, potteryImg], // Use same or add more images
    artisan: {
      name: "Mohammad Al-Khatib",
      location: "Damascus, Syria",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      description: "Fourth-generation potter preserving ancient Syrian techniques."
    },
    rating: 4.8,
    reviews: 47
  }

  const [mainImage, setMainImage] = useState(product.images[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Gallery */}
        <div>
          <img src={mainImage} alt={product.name} className="w-full rounded-2xl shadow-md" />
          <div className="flex gap-2 mt-4">
            {product.images.map((img, idx) => (
              <img key={idx} src={img} className="w-20 h-20 object-cover rounded cursor-pointer border-2 border-primary" onClick={() => setMainImage(img)} />
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">{product.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-accent">★★★★★</div>
            <span className="text-sm text-neutral-900/70">{product.rating} ({product.reviews} reviews)</span>
          </div>
          <p className="text-2xl text-primary font-bold mt-4">${product.price}</p>
          <p className="mt-4 text-neutral-900/80">{product.description}</p>

          <div className="flex items-center gap-4 mt-6">
            <div className="flex border rounded">
              <button className="px-3 py-1" onClick={() => setQuantity(Math.max(1, quantity-1))}>-</button>
              <span className="px-4 py-1">{quantity}</span>
              <button className="px-3 py-1" onClick={() => setQuantity(quantity+1)}>+</button>
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-lg flex items-center gap-2">
              <ShoppingBag size={18} /> Add to Cart
            </button>
          </div>

          {/* Artisan Card */}
          <div className="bg-surface rounded-xl p-4 mt-8">
            <div className="flex items-center gap-3">
              <img src={product.artisan.avatar} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold">{product.artisan.name}</p>
                <p className="text-sm text-neutral-900/60">{product.artisan.location}</p>
                <p className="text-xs mt-1">{product.artisan.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Visualizer */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-6">AI Product Visualizer <span className="text-primary">المتخيِّل الاستباقي</span></h2>
        <AIProductVisualizer originalImage={product.images[0]} productName={product.name} />
      </div>
    </div>
  )
}

export default ProductDetailPage