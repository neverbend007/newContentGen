import { Link } from 'react-router-dom'
import { ServiceGrid } from '@/components/features/services/ServiceGrid'
import { ROUTES } from '@/constants/routes'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-neutral-black mb-6">
              Professional Content Generation
              <br />
              <span className="text-primary">On Demand</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Get high-quality, customized content for your business needs. From blog
              posts to social media content, we've got you covered.
            </p>
            <Link
              to={ROUTES.SERVICES}
              className="inline-block bg-neutral-black text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b-2 border-neutral-black"></div>
      </div>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-black mb-4">
              Our Content Services
            </h2>
            <p className="text-gray-600">
              Choose from our wide range of professional content services
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>
    </div>
  )
}

export default Home 