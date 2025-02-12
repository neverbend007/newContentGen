import { Link } from 'react-router-dom'
import { SERVICES } from '@/data/services'

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="bg-white p-8 rounded-lg shadow-md">
            <div className="relative h-48 mb-6">
              <img 
                src={service.imagePath}
                alt={service.name}
                className="w-full h-full object-cover rounded-md"
              />
              <div className={`absolute top-4 left-4 px-3 py-1 ${service.badgeColor} text-white text-sm rounded`}>
                {service.category}
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4">{service.name}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary-DEFAULT">
                ${service.price}
              </span>
              <Link
                to={`/products/${service.id}`}
                className="bg-neutral-black hover:bg-opacity-90 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services 