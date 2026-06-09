import { useState } from 'react'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

// Import images (using your existing images for visual consistency)
import potteryImg from '../assets/images/pottery.jpg'
import woodworkImg from '../assets/images/woodwork.jpg'
import paintingImg from '../assets/images/painting.jpg'
import crochetImg from '../assets/images/crochet.jpg'
import woodwork2Img from '../assets/images/woodwork2.jpg'
import painting2Img from '../assets/images/painting2.jpg'

const stories = [
  {
    id: 1,
    title: "The Ancient Art of Damascus Pottery",
    excerpt: "Discover how Syrian potters have preserved techniques dating back to the 8th century, shaping clay into timeless masterpieces.",
    content: "Full story content here... The tradition of pottery in Damascus goes back centuries...",
    image: potteryImg,
    author: "Mohammad Al-Khatib",
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Heritage"
  },
  {
    id: 2,
    title: "Olive Wood: The Soul of Aleppo",
    excerpt: "From ancient olive groves to intricately carved boxes – the journey of Aleppo's most beloved craft.",
    image: woodworkImg,
    author: "Fatima Al-Hussein",
    date: "March 10, 2026",
    readTime: "4 min read",
    category: "Materials"
  },
  {
    id: 3,
    title: "Reviving Syrian Calligraphy",
    excerpt: "Modern artists are blending classical Arabic calligraphy with contemporary art, creating a vibrant new movement.",
    image: paintingImg,
    author: "Omar Al-Rahman",
    date: "March 5, 2026",
    readTime: "6 min read",
    category: "Art"
  },
  {
    id: 4,
    title: "The Women Weaving Syria's Future",
    excerpt: "Meet the female artisans who are keeping crochet and textile traditions alive while empowering their communities.",
    image: crochetImg,
    author: "Layla Hassan",
    date: "February 28, 2026",
    readTime: "7 min read",
    category: "Community"
  },
  {
    id: 5,
    title: "From Workshop to World: An Artisan's Journey",
    excerpt: "How Syrian craftsmen are reaching global audiences through ShamCrafts and preserving their legacy.",
    image: woodwork2Img,
    author: "Tariq Mansour",
    date: "February 20, 2026",
    readTime: "5 min read",
    category: "Success"
  },
  {
    id: 6,
    title: "Colors of the Levant: Natural Pigments in Syrian Art",
    excerpt: "The ancient practice of creating paints from earth, plants, and minerals – still used by Syrian painters today.",
    image: painting2Img,
    author: "Nadia Barakat",
    date: "February 12, 2026",
    readTime: "4 min read",
    category: "Technique"
  }
]

const categories = ["All", "Heritage", "Materials", "Art", "Community", "Success", "Technique"]

const StoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedStory, setSelectedStory] = useState(null)

  const filteredStories = selectedCategory === "All"
    ? stories
    : stories.filter(story => story.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/5 to-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Stories of Syrian Craftsmanship
          </h1>
          <p className="text-lg text-neutral-900/70 max-w-2xl mx-auto">
            Explore the heritage, techniques, and the people behind every handmade treasure.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 border-b border-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  selectedCategory === cat
                    ? "bg-primary text-white"
                    : "bg-surface text-neutral-900 hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-surface rounded-2xl overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => setSelectedStory(story)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-neutral-900/60 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {story.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {story.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-neutral-900/70 text-sm mb-4 line-clamp-3">
                    {story.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium">{story.category}</span>
                    <span className="text-primary text-sm font-medium flex items-center gap-1">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-900/70">No stories found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Story Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="bg-background rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition"
              >
                ✕
              </button>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 text-sm text-neutral-900/60 mb-4 flex-wrap">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {selectedStory.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {selectedStory.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <User size={14} />
                  {selectedStory.author}
                </span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                  {selectedStory.category}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                {selectedStory.title}
              </h2>
              <div className="prose prose-neutral max-w-none">
                <p className="text-neutral-900/80 leading-relaxed mb-4">
                  {selectedStory.excerpt}
                </p>
                <p className="text-neutral-900/80 leading-relaxed mb-4">
                  This is a demo story content. In a real implementation, you would store full story text in a CMS or database.
                  The rich heritage of Syrian crafts is preserved through generations of skilled artisans.
                </p>
                <p className="text-neutral-900/80 leading-relaxed">
                  ShamCrafts is proud to share these stories to connect you directly with the culture and passion behind every piece.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-surface">
                <h4 className="font-semibold text-neutral-900 mb-3">Share this story</h4>
                <div className="flex gap-3">
                  <button className="bg-surface p-2 rounded-full hover:bg-primary/10 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                  </button>
                  <button className="bg-surface p-2 rounded-full hover:bg-primary/10 transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Signup */}
      <section className="bg-surface py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">
            Subscribe to Our Stories
          </h2>
          <p className="text-neutral-900/70 mb-6">
            Get the latest artisan stories and heritage insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded-lg border border-surface focus:outline-none focus:border-primary bg-background"
            />
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StoriesPage