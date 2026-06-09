import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Globe, LogIn, User } from 'lucide-react'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [language, setLanguage] = useState('EN')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'AR' : 'EN')
    // Future: integrate i18n for RTL support
    console.log(`Language switched to ${language === 'EN' ? 'Arabic' : 'English'}`)
  }

  const handleArtisanLogin = () => {
    console.log('Navigate to Artisan Dashboard')
    alert('Artisan Login Portal (Demo)')
  }

  return (
    <nav className="bg-background border-b border-surface sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - links to home */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="ShamCrafts Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-semibold text-neutral-900 hidden sm:inline">
              ShamCrafts
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-neutral-900 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/shop" className="text-neutral-900 hover:text-primary transition-colors font-medium">
              Shop
            </Link>
            <Link to="/collections" className="text-neutral-900 hover:text-primary transition-colors font-medium">
              Collections
            </Link>
            <Link to="/artisans" className="text-neutral-900 hover:text-primary transition-colors font-medium">
              Artisans
            </Link>
            <Link to="/stories" className="text-neutral-900 hover:text-primary transition-colors font-medium">
              Stories
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-surface transition-colors"
              aria-label="Toggle Language"
            >
              <Globe size={18} className="text-primary" />
              <span className="text-sm font-medium text-neutral-900">{language}</span>
            </button>

            {/* Customer Login Link */}
            <Link
              to="/login"
              className="flex items-center space-x-2 text-neutral-900 hover:text-primary transition-colors"
            >
              <User size={18} />
              <span className="hidden sm:inline text-sm font-medium">Sign In</span>
            </Link>

            {/* Artisan Login Button */}
            <button
              onClick={handleArtisanLogin}
              className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all shadow-sm"
            >
              <LogIn size={18} />
              <span className="hidden sm:inline">Artisan Login</span>
            </button>
          </div>
        </div>

        {/* Mobile navigation links */}
        <div className="md:hidden flex justify-center space-x-6 py-3 border-t border-surface">
          <Link to="/" className="text-neutral-900 hover:text-primary text-sm">Home</Link>
          <Link to="/shop" className="text-neutral-900 hover:text-primary text-sm">Shop</Link>
          <Link to="/collections" className="text-neutral-900 hover:text-primary text-sm">Collections</Link>
          <Link to="/artisans" className="text-neutral-900 hover:text-primary text-sm">Artisans</Link>
          <Link to="/stories" className="text-neutral-900 hover:text-primary text-sm">Stories</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar