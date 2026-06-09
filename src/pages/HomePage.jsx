import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react'
import heroBanner from '../assets/images/hero-banner.jpg'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

// Import your product images
import potteryImg from '../assets/images/pottery.jpg'
import woodworkImg from '../assets/images/woodwork.jpg'
import woodwork2Img from '../assets/images/woodwork2.jpg'
import woodwork3Img from '../assets/images/woodwork3.jpg'
import paintingImg from '../assets/images/painting.jpg'
import painting2Img from '../assets/images/painting2.jpg'
import crochetImg from '../assets/images/crochet.jpg'
import sewingImg from '../assets/images/sewing.jpg'


import potteryIcon from '../assets/icons/pottery-icon.png'
import woodworkIcon from '../assets/icons/woodwork-icon.png'
import paintingIcon from '../assets/icons/painting-icon.png'
import textilesIcon from '../assets/icons/textiles-icon.png'

const products = [
    { id: 1, name: "Damascus Pottery Vase", price: 45, image: potteryImg, category: "pottery", rating: 4.8 },
    { id: 2, name: "Aleppo Olive Wood Box", price: 65, image: woodworkImg, category: "wood", rating: 4.9 },
    { id: 3, name: "Hand-painted Syrian Plate", price: 38, image: paintingImg, category: "painting", rating: 4.7 },
    { id: 4, name: "Crochet Shawl", price: 28, image: crochetImg, category: "crochet", rating: 4.6 },
    { id: 5, name: "Embroidered Fabric", price: 32, image: sewingImg, category: "sewing", rating: 4.8 },
    { id: 6, name: "Wooden Inlaid Box", price: 85, image: woodwork2Img, category: "wood", rating: 5.0 },
    { id: 7, name: "Abstract Syrian Art", price: 55, image: painting2Img, category: "painting", rating: 4.5 },
    { id: 8, name: "Carved Wood Tray", price: 42, image: woodwork3Img, category: "wood", rating: 4.7 },
]

const categories = [
    { name: "Pottery", icon: potteryIcon, color: "bg-orange-100" },
    { name: "Woodwork", icon: woodworkIcon, color: "bg-amber-100" },
    { name: "Painting", icon: paintingIcon, color: "bg-rose-100" },
    { name: "Textiles", icon: textilesIcon, color: "bg-teal-100" },
]
const HomePage = () => {
    const carouselRef = useRef(null)
    const [scrollPosition, setScrollPosition] = useState(0)

    const scroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 300
            const newPosition = scrollPosition + (direction === 'left' ? -scrollAmount : scrollAmount)
            carouselRef.current.scrollTo({ left: newPosition, behavior: 'smooth' })
            setScrollPosition(newPosition)
        }
    }

    return (
        <div>
            {/* Hero Section with Background Image */}
            <section
                className="relative py-20 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBanner})` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Syrian Heritage,<br />Crafted for the World
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
                        Discover authentic handmade treasures from Syrian artisans – pottery, woodwork, paintings, and textiles.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            to="/shop"
                            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
                        >
                            Shop Now
                        </Link>
                        <Link
                            to="/artisans"
                            className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
                        >
                            Meet Artisans
                        </Link>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
                        Explore Categories
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {categories.map((cat, idx) => (
                            <div
                                key={idx}
                                className={`${cat.color} rounded-2xl p-6 text-center hover:shadow-lg transition cursor-pointer`}
                            >
                                <div className="flex justify-center mb-3">
                                    <img
                                        src={cat.icon}
                                        alt={cat.name}
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900">{cat.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Recommended Carousel */}
            <section className="py-16 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center gap-2">
                            <Sparkles className="text-primary" size={28} />
                            <h2 className="text-3xl font-bold text-neutral-900">
                                AI Recommended for You
                            </h2>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => scroll('left')} className="p-2 bg-background rounded-full shadow hover:bg-primary/10">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={() => scroll('right')} className="p-2 bg-background rounded-full shadow hover:bg-primary/10">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto scroll-smooth gap-6 pb-4 hide-scrollbar"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {products.map(product => (
                            <div key={product.id} className="min-w-[280px] bg-background rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-semibold text-neutral-900">{product.name}</h3>
                                    <div className="flex items-center mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-gray-300"} />
                                        ))}
                                        <span className="text-xs ml-1 text-neutral-900/60">{product.rating}</span>
                                    </div>
                                    <div className="flex justify-between items-center mt-3">
                                        <span className="text-primary font-bold">${product.price}</span>
                                        <button className="text-xs bg-primary text-white px-3 py-1 rounded hover:bg-opacity-90">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage