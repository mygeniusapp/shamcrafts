import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CollectionsPage from './pages/CollectionsPage'
import ArtisansPage from './pages/ArtisansPage'
import StoriesPage from './pages/StoriesPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
         <Route path="/artisans" element={<ArtisansPage />} />
         <Route path="/stories" element={<StoriesPage />} />
         <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App