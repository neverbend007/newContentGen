import { Link, useNavigate } from 'react-router-dom'
import { SERVICES } from '@/data/services'

export const ServiceGrid = () => {
  const navigate = useNavigate()
  
  const handleLearnMore = (serviceId: string) => {
    navigate(`/products/${serviceId}`)
    window.scrollTo(0, 0)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {SERVICES.map((service) => (
        <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-56">
            <img 
              src={service.imagePath}
              alt={service.name}
              className="w-full h-full object-cover"
            />
            <div className={`absolute top-4 left-4 px-3 py-1 ${service.badgeColor} text-white text-sm rounded`}>
              {service.category}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-neutral-black mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary-DEFAULT">
                ${service.price}
              </span>
              <button
                onClick={() => handleLearnMore(service.id)}
                className="bg-neutral-black hover:bg-opacity-90 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 