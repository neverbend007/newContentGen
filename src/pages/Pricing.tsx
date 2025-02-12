const Pricing = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Starter</h2>
          <p className="text-4xl font-bold mb-4">$99<span className="text-lg font-normal">/mo</span></p>
          <ul className="space-y-3 mb-6">
            <li>5 Content Pieces</li>
            <li>Basic Editing</li>
            <li>48h Delivery</li>
          </ul>
          <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark">
            Get Started
          </button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md border-2 border-primary">
          <h2 className="text-xl font-semibold mb-4">Professional</h2>
          <p className="text-4xl font-bold mb-4">$199<span className="text-lg font-normal">/mo</span></p>
          <ul className="space-y-3 mb-6">
            <li>15 Content Pieces</li>
            <li>Advanced Editing</li>
            <li>24h Delivery</li>
          </ul>
          <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark">
            Get Started
          </button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Enterprise</h2>
          <p className="text-4xl font-bold mb-4">$499<span className="text-lg font-normal">/mo</span></p>
          <ul className="space-y-3 mb-6">
            <li>Unlimited Content</li>
            <li>Premium Editing</li>
            <li>12h Delivery</li>
          </ul>
          <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing 