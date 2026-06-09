import { useState } from 'react'
import { Wand2, Loader2 } from 'lucide-react'

const AIProductVisualizer = ({ originalImage, productName }) => {
  const [prompt, setPrompt] = useState('')
  const [generatedImage, setGeneratedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // Demo transformation: maps keywords to different placeholder images
  const generateAIPreview = (userPrompt) => {
    setIsLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      let demoImageUrl = originalImage // fallback to original
      const lowerPrompt = userPrompt.toLowerCase()
      
      // Demo mapping for visual variety (in real app, this would call an AI API)
      if (lowerPrompt.includes('dark walnut') || lowerPrompt.includes('darker')) {
        demoImageUrl = 'https://picsum.photos/id/111/400/400' // Dark wood style
      } else if (lowerPrompt.includes('gold') || lowerPrompt.includes('golden')) {
        demoImageUrl = 'https://picsum.photos/id/29/400/400' // Golden tones
      } else if (lowerPrompt.includes('marble') || lowerPrompt.includes('white')) {
        demoImageUrl = 'https://picsum.photos/id/104/400/400' // White marble
      } else if (lowerPrompt.includes('vintage') || lowerPrompt.includes('antique')) {
        demoImageUrl = 'https://picsum.photos/id/96/400/400' // Vintage style
      } else if (lowerPrompt.includes('modern') || lowerPrompt.includes('minimal')) {
        demoImageUrl = 'https://picsum.photos/id/20/400/400' // Modern clean
      } else {
        // Default AI transformation effect - different image ID to simulate change
        demoImageUrl = `https://picsum.photos/id/15/400/400` // Artistic transformation
      }
      
      setGeneratedImage(demoImageUrl)
      setIsLoading(false)
    }, 1500)
  }

  const handleGenerate = () => {
    if (!prompt.trim()) {
      alert('Please enter a modification request (e.g., "Change the wood color to dark walnut")')
      return
    }
    generateAIPreview(prompt)
  }

  return (
    <div className="bg-surface rounded-2xl p-6 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Original Image */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-neutral-900 text-center">Original</h3>
          <div className="bg-background rounded-xl overflow-hidden border border-accent/30">
            <img 
              src={originalImage} 
              alt={`Original ${productName}`}
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
        </div>

        {/* AI Generated Preview */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-neutral-900 text-center">
            AI Custom Preview
            <span className="text-primary text-sm ml-2">المتخيِّل الاستباقي</span>
          </h3>
          <div className="bg-background rounded-xl overflow-hidden border border-accent/30 relative min-h-[300px] flex items-center justify-center">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center space-y-3 p-8">
                <Loader2 size={40} className="text-primary animate-spin" />
                <p className="text-neutral-900">AI is visualizing your request...</p>
              </div>
            ) : generatedImage ? (
              <img 
                src={generatedImage} 
                alt="AI Generated Preview"
                className="w-full h-auto object-cover aspect-square"
              />
            ) : (
              <div className="text-center p-8">
                <Wand2 size={48} className="text-accent mx-auto mb-3" />
                <p className="text-neutral-900 opacity-70">
                  Enter your modification request to see AI-generated preview
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="mt-8">
        <label className="block text-neutral-900 font-medium mb-2">
          Custom Modification Request
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Change the wood color to dark walnut with gold inlays"
            className="flex-1 px-4 py-3 bg-background border border-surface rounded-lg focus:outline-none focus:border-primary transition-colors text-neutral-900"
            onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
          />
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all shadow-sm flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Wand2 size={18} />
            <span>Generate Preview</span>
          </button>
        </div>
        <p className="text-xs text-neutral-900 opacity-60 mt-2">
          * AI visualizer demo: Experience how your custom request transforms the product
        </p>
      </div>

      {/* Side-by-side comparison note */}
      {generatedImage && !isLoading && (
        <div className="mt-6 text-center text-sm text-primary">
          ✓ AI preview generated - Compare side by side with original
        </div>
      )}
    </div>
  )
}

export default AIProductVisualizer