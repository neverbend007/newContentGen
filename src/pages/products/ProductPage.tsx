import { useParams, useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { SERVICES } from '@/data/services'
import { SERVICE_DETAILS } from '@/data/serviceDetails'

export const ProductPage = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const product = SERVICES.find(service => service.id === productId)
  const details = productId ? SERVICE_DETAILS[productId] : null
  
  if (!product || !details) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
          <p className="mt-2 text-gray-600">The product you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="mt-4 inline-block bg-primary-DEFAULT text-white px-6 py-2 rounded-md hover:bg-opacity-90"
          >
            Go back home
          </Link>
        </div>
      </div>
    )
  }

  const handleGetStarted = () => {
    navigate(`/order?service=${product.id}`)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-neutral-black mb-4">
          {product.name}
        </h1>
        <div className="inline-block px-3 py-1 bg-primary-lightest text-white text-sm rounded-md mb-4">
          {product.category}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64">
            <img 
              src={product.imagePath}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {details.description}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-primary-DEFAULT">
                ${product.price}
              </span>
              <button
                onClick={handleGetStarted}
                className="bg-neutral-black hover:bg-opacity-90 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Example Preview</h2>
          <div className="prose max-w-none h-[calc(100%-4rem)]">
            {details.example.title && (
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {details.example.title}
              </h3>
            )}
            {details.example.meta && (
              <div className="bg-gray-50 p-4 rounded-md mb-4 text-sm text-gray-600">
                <strong className="block mb-1">Meta Description:</strong>
                {details.example.meta}
              </div>
            )}
            <div className={`${
              product.id === 'technical' ? 'font-mono text-sm bg-gray-50 p-4 rounded-md' : 
              product.id === 'social-media' ? 'text-lg' : 
              'text-gray-600 leading-relaxed'
            } h-full overflow-y-auto`}>
              <div className="whitespace-pre-line font-sans">
                {details.example.content}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included Section - Full Width */}
      <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-xl font-semibold mb-6">What's included:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckIcon className="h-6 w-6 text-primary-DEFAULT mr-3 mt-1" />
              <span className="text-gray-600">
                Professional {product.category.toLowerCase()} optimized for your industry
              </span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-6 w-6 text-primary-DEFAULT mr-3 mt-1" />
              <span className="text-gray-600">
                SEO optimization and keyword research
              </span>
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckIcon className="h-6 w-6 text-primary-DEFAULT mr-3 mt-1" />
              <span className="text-gray-600">
                Two rounds of revisions
              </span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="h-6 w-6 text-primary-DEFAULT mr-3 mt-1" />
              <span className="text-gray-600">
                24/7 customer support
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const CheckIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M5 13l4 4L19 7" 
    />
  </svg>
) 