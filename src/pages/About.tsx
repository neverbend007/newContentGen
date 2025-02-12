const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            ContentGen is a cutting-edge AI-powered content generation platform designed to help businesses
            create high-quality content at scale. Our mission is to make professional content creation
            accessible to everyone.
          </p>
          <p className="text-gray-600 mb-6">
            Founded in 2024, we combine advanced AI technology with human expertise to deliver
            content that engages, converts, and drives results.
          </p>
          <div className="bg-primary/5 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses with AI-driven content solutions that save time,
              reduce costs, and drive growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 