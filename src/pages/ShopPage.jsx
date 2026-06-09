import { useState } from 'react'
import { Star, Filter, X } from 'lucide-react'

// Import all product images
import potteryImg from '../assets/images/pottery.jpg'
import woodworkImg from '../assets/images/woodwork.jpg'
import woodwork2Img from '../assets/images/woodwork2.jpg'
import woodwork3Img from '../assets/images/woodwork3.jpg'
import paintingImg from '../assets/images/painting.jpg'
import painting2Img from '../assets/images/painting2.jpg'
import painting3Img from '../assets/images/painting3.jpg'
import crochetImg from '../assets/images/crochet.jpg'
import crochet2Img from '../assets/images/crochet2.jpg'
import sewingImg from '../assets/images/sewing.jpg'

// Complete product catalog
const allProducts = [
  { id: 1, name: "Damascus Pottery Vase", price: 45, image: potteryImg, category: "Pottery", rating: 4.8, inStock: true },
  { id: 2, name: "Aleppo Olive Wood Box", price: 65, image: woodworkImg, category: "Woodwork", rating: 4.9, inStock: true },
  { id: 3, name: "Hand-painted Syrian Plate", price: 38, image: paintingImg, category: "Painting", rating: 4.7, inStock: true },
  { id: 4, name: "Crochet Shawl", price: 28, image: crochetImg, category: "Textiles", rating: 4.6, inStock: true },
  { id: 5, name: "Embroidered Fabric", price: 32, image: sewingImg, category: "Textiles", rating: 4.8, inStock: true },
  { id: 6, name: "Wooden Inlaid Box", price: 85, image: woodwork2Img, category: "Woodwork", rating: 5.0, inStock: true },
  { id: 7, name: "Abstract Syrian Art", price: 55, image: painting2Img, category: "Painting", rating: 4.5, inStock: true },
  { id: 8, name: "Carved Wood Tray", price: 42, image: woodwork3Img, category: "Woodwork", rating: 4.7, inStock: true },
  { id: 9, name: "Traditional Crochet Blanket", price: 48, image: crochet2Img, category: "Textiles", rating: 4.6, inStock: false },
  { id: 10, name: "Modern Syrian Painting", price: 72, image: painting3Img, category: "Painting", rating: 4.9, inStock: true },
]

const categories = ["All", "Pottery", "Woodwork", "Painting", "Textiles"]

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [priceRange, setPriceRange] = useState(100)
  const [sortBy, setSortBy] = useState("featured")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter products
  let filtered = allProducts.filter(product => {
    const matchCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchPrice = product.price <= priceRange
    return matchCategory && matchPrice
  })

  // Sort products
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    if (sortBy === "rating") return b.rating - a.rating
    return a.id - b.id // featured default
  })

  const handleAddToCart = (productName) => {
    alert(`Added "${productName}" to cart! (Demo)`)
  }

  const FilterSidebar = () => (
    <div className="bg-surface rounded-xl p-6 space-y-6">
      <div>
        <h3 className="font-semibold text-neutral-900 mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
                className="text-primary focus:ring-primary"
              />
              <span className="text-neutral-900">{cat}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-neutral-900 mb-3">Max Price: ${priceRange}</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-sm text-neutral-900/60 mt-1">
          <span>$0</span>
          <span>$100+</span>
        </div>
      </div>
      <button
        onClick={() => { setSelectedCategory("All"); setPriceRange(100); setSortBy("featured") }}
        className="text-primary text-sm hover:underline"
      >
        Reset Filters
      </button>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900">Shop Handmade Crafts</h1>
        <p className="text-neutral-900/60 mt-1">Authentic Syrian artistry, direct from artisans</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <FilterSidebar />
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top Bar: Mobile filter toggle + sort */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-surface rounded-lg text-neutral-900"
            >
              <Filter size={18} /> Filters
            </button>
            <div className="flex items-center gap-3">
              <span className="text-sm text-neutral-900">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-surface rounded-lg px-3 py-2 bg-background text-neutral-900 focus:outline-none focus:border-primary"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-neutral-900/60 mb-4">{sorted.length} products found</p>

          {/* Product Grid */}
          {sorted.length === 0 ? (
            <div className="text-center py-12 bg-surface rounded-xl">
              <p className="text-neutral-900">No products match your filters.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setPriceRange(100); }}
                className="text-primary mt-2 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sorted.map(product => (
                <div key={product.id} className="bg-background border border-surface rounded-xl overflow-hidden hover:shadow-lg transition group">
                  <div className="relative overflow-hidden bg-surface">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                    />
                    {!product.inStock && (
                      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Out of Stock
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-primary uppercase tracking-wide">{product.category}</div>
                    <h3 className="font-semibold text-lg text-neutral-900 mt-1">{product.name}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-gray-300"} />
                      ))}
                      <span className="text-xs text-neutral-900/60 ml-1">{product.rating}</span>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-primary font-bold text-xl">${product.price}</span>
                      <button
                        onClick={() => handleAddToCart(product.name)}
                        disabled={!product.inStock}
                        className={`px-4 py-2 rounded-lg text-sm transition ${
                          product.inStock
                            ? "bg-primary text-white hover:bg-opacity-90"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setIsFilterOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-80 bg-background shadow-xl p-6 overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
            </div>
            <FilterSidebar />
            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-full mt-6 bg-primary text-white py-2 rounded-lg"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShopPage