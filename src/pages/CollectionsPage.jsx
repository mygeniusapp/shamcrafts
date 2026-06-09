import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Import collection background images (using your existing product images as placeholders)
import potteryImg from '../assets/images/pottery.jpg'
import woodworkImg from '../assets/images/woodwork.jpg'
import paintingImg from '../assets/images/painting.jpg'
import crochetImg from '../assets/images/crochet.jpg'
import woodwork2Img from '../assets/images/woodwork2.jpg'
import painting2Img from '../assets/images/painting2.jpg'

const collections = [
  {
    id: 1,
    title: "Damascus Heritage",
    description: "Timeless pieces inspired by the ancient capital's rich artistic legacy. Pottery, inlaid wood, and traditional motifs.",
    image: potteryImg,
    link: "/shop?category=Pottery",
    color: "from-primary/80 to-primary/40"
  },
  {
    id: 2,
    title: "Aleppo Olive Wood",
    description: "Exquisite hand-carved olive wood creations from the historic city of Aleppo. Each piece tells a story.",
    image: woodworkImg,
    link: "/shop?category=Woodwork",
    color: "from-amber-800/80 to-amber-600/40"
  },
  {
    id: 3,
    title: "Contemporary Syrian Art",
    description: "Modern interpretations of traditional Syrian art – paintings that blend heritage with contemporary expression.",
    image: paintingImg,
    link: "/shop?category=Painting",
    color: "from-rose-800/80 to-rose-600/40"
  },
  {
    id: 4,
    title: "Textile Treasures",
    description: "Soft crochet, intricate embroidery, and woven fabrics made by Syrian artisans using generations-old techniques.",
    image: crochetImg,
    link: "/shop?category=Textiles",
    color: "from-teal-800/80 to-teal-600/40"
  },
  {
    id: 5,
    title: "Ramadan & Eid Collection",
    description: "Celebrate the holy months with special handmade gifts – decorative items, prayer beads, and festive home decor.",
    image: woodwork2Img,
    link: "/shop?collection=ramadan",
    color: "from-emerald-800/80 to-emerald-600/40"
  },
  {
    id: 6,
    title: "Artisan Signatures",
    description: "Limited edition, one-of-a-kind masterpieces signed by renowned Syrian craftsmen. True collector's items.",
    image: painting2Img,
    link: "/shop?collection=artisan",
    color: "from-indigo-800/80 to-indigo-600/40"
  }
]

const CollectionsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Explore Our Collections
          </h1>
          <p className="text-lg text-neutral-900/70 max-w-2xl mx-auto">
            Curated selections of Syrian craftsmanship – from ancient traditions to contemporary expressions.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                to={collection.link}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-80"
              >
                {/* Background Image */}
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${collection.color}`}></div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                  <p className="text-sm text-white/90 mb-4 line-clamp-2">{collection.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium border-b border-white/50 pb-0.5 group-hover:gap-2 transition-all">
                    Shop Collection <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-surface py-16 mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Become an Artisan Partner
          </h2>
          <p className="text-neutral-900/70 mb-8">
            Are you a Syrian craftsman? Join ShamCrafts to reach global customers and showcase your heritage.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition shadow-md">
            Join as Artisan
          </button>
        </div>
      </section>
    </div>
  )
}

export default CollectionsPage