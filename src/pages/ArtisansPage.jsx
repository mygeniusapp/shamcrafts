import { useState } from 'react'
import { MapPin, Star, Globe, Camera, Send } from 'lucide-react'

// Import artisan images
import potteryImg from '../assets/images/pottery.jpg'
import woodworkImg from '../assets/images/woodwork.jpg'
import paintingImg from '../assets/images/painting.jpg'
import crochetImg from '../assets/images/crochet.jpg'

const artisans = [
  {
    id: 1,
    name: "Mohammad Al-Khatib",
    craft: "Pottery Master",
    location: "Damascus, Syria",
    bio: "Fourth-generation potter preserving ancient Syrian techniques. His family has been crafting terracotta masterpieces since 1890.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    coverImage: potteryImg,
    rating: 4.9,
    products: 24,
    social: { instagram: "#", twitter: "#" }
  },
  {
    id: 2,
    name: "Fatima Al-Hussein",
    craft: "Wood Carver",
    location: "Aleppo, Syria",
    bio: "Specializes in intricate olive wood inlay and geometric patterns. Fatima learned from her father and now teaches young artisans.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    coverImage: woodworkImg,
    rating: 4.8,
    products: 18,
    social: { instagram: "#", twitter: "#" }
  },
  {
    id: 3,
    name: "Omar Al-Rahman",
    craft: "Painting & Calligraphy",
    location: "Homs, Syria",
    bio: "Contemporary artist blending traditional Arabic calligraphy with modern abstract expression. Exhibited in Damascus and Beirut.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    coverImage: paintingImg,
    rating: 4.9,
    products: 32,
    social: { instagram: "#", twitter: "#" }
  },
  {
    id: 4,
    name: "Layla Hassan",
    craft: "Textile & Crochet",
    location: "Latakia, Syria",
    bio: "Reviving coastal Syrian textile traditions with modern designs. Each piece takes up to 60 hours of handwork.",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    coverImage: crochetImg,
    rating: 4.7,
    products: 15,
    social: { instagram: "#", twitter: "#" }
  }
]

const ArtisansPage = () => {
  const [selectedArtisan, setSelectedArtisan] = useState(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Meet Our Artisans
          </h1>
          <p className="text-lg text-neutral-900/70 max-w-2xl mx-auto">
            Behind every ShamCrafts product is a Syrian artisan preserving centuries of heritage. 
            Get to know the hands that create.
          </p>
        </div>
      </section>

      {/* Artisans Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan) => (
              <div
                key={artisan.id}
                className="bg-surface rounded-2xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedArtisan(artisan)}
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src={artisan.coverImage}
                    alt={artisan.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="px-6 pb-6 relative">
                  <div className="flex justify-center -mt-10">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-20 h-20 rounded-full border-4 border-background object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 text-center mt-3">
                    {artisan.name}
                  </h3>
                  <p className="text-primary text-center font-medium">{artisan.craft}</p>
                  <div className="flex items-center justify-center gap-1 text-sm text-neutral-900/60 mt-1">
                    <MapPin size={14} />
                    <span>{artisan.location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="flex items-center">
                      <Star size={16} className="fill-accent text-accent" />
                      <span className="text-sm ml-1">{artisan.rating}</span>
                    </div>
                    <span className="text-neutral-900/40">•</span>
                    <span className="text-sm text-neutral-900/60">{artisan.products} products</span>
                  </div>
                  <p className="text-neutral-900/70 text-sm mt-3 line-clamp-2 text-center">
                    {artisan.bio}
                  </p>
                  <button className="w-full mt-4 bg-background border border-primary text-primary py-2 rounded-lg hover:bg-primary hover:text-white transition">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedArtisan && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArtisan(null)}
        >
          <div
            className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48">
              <img
                src={selectedArtisan.coverImage}
                alt={selectedArtisan.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedArtisan(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
              >
                ✕
              </button>
            </div>
            <div className="px-6 pb-6 relative">
              <div className="flex justify-center -mt-12">
                <img
                  src={selectedArtisan.image}
                  alt={selectedArtisan.name}
                  className="w-24 h-24 rounded-full border-4 border-background object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 text-center mt-2">
                {selectedArtisan.name}
              </h2>
              <p className="text-primary text-center font-medium">{selectedArtisan.craft}</p>
              <div className="flex items-center justify-center gap-1 text-neutral-900/60 mt-1">
                <MapPin size={14} />
                <span>{selectedArtisan.location}</span>
              </div>
              <div className="flex justify-center gap-4 mt-3">
                <a href={selectedArtisan.social.instagram} className="text-neutral-900 hover:text-primary">
                  <Camera size={20} />
                </a>
                <a href={selectedArtisan.social.twitter} className="text-neutral-900 hover:text-primary">
                  <Send size={20} />
                </a>
                <a href="#" className="text-neutral-900 hover:text-primary">
                  <Globe size={20} />
                </a>
              </div>
              <div className="border-t border-surface my-4"></div>
              <h3 className="font-semibold text-neutral-900 mb-2">About</h3>
              <p className="text-neutral-900/80">{selectedArtisan.bio}</p>
              <div className="flex justify-between items-center mt-6">
                <div className="bg-surface rounded-lg p-3 text-center flex-1 mr-2">
                  <div className="text-xl font-bold text-primary">{selectedArtisan.products}</div>
                  <div className="text-xs text-neutral-900/60">Products</div>
                </div>
                <div className="bg-surface rounded-lg p-3 text-center flex-1 mr-2">
                  <div className="text-xl font-bold text-primary">{selectedArtisan.rating}</div>
                  <div className="text-xs text-neutral-900/60">Rating</div>
                </div>
                <div className="bg-surface rounded-lg p-3 text-center flex-1">
                  <div className="text-xl font-bold text-primary">5+</div>
                  <div className="text-xs text-neutral-900/60">Years exp.</div>
                </div>
              </div>
              <button className="w-full mt-6 bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition">
                Shop {selectedArtisan.name}'s Collection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-surface py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Are You a Syrian Artisan?
          </h2>
          <p className="text-neutral-900/70 mb-8">
            Join ShamCrafts to reach global customers, get fair prices, and be part of a community preserving Syrian heritage.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition">
            Become an Artisan Partner
          </button>
        </div>
      </section>
    </div>
  )
}

export default ArtisansPage