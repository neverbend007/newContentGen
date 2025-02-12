export interface Service {
  id: string
  name: string
  description: string
  price: number
  category: string
  imagePath: string
  badgeColor?: string
}

export const SERVICES: Service[] = [
  {
    id: 'blog',
    name: 'Blog Post Writing',
    description: 'Professional blog content tailored to your industry and audience',
    price: 49.99,
    category: 'Content Writing',
    imagePath: '/blog.png',
    badgeColor: 'bg-primary-lightest'
  },
  {
    id: 'social-media',
    name: 'Social Media Content',
    description: 'Engaging social media posts to boost your online presence',
    price: 29.99,
    category: 'Social Media',
    imagePath: '/socialmedia.png',
    badgeColor: 'bg-primary-lightest'
  },
  {
    id: 'product-desc',
    name: 'Product Descriptions',
    description: 'Compelling product descriptions that convert browsers to buyers',
    price: 39.99,
    category: 'E-commerce',
    imagePath: '/prod-desc.png',
    badgeColor: 'bg-primary-lightest'
  },
  {
    id: 'email',
    name: 'Email Newsletter',
    description: 'Professionally crafted email newsletters that engage your subscribers',
    price: 59.99,
    category: 'Email Marketing',
    imagePath: '/emailNews.png',
    badgeColor: 'bg-primary-lightest'
  },
  {
    id: 'technical',
    name: 'Technical Writing',
    description: 'Clear and concise technical documentation and guides',
    price: 79.99,
    category: 'Technical',
    imagePath: '/techWriting.png',
    badgeColor: 'bg-primary-lightest'
  },
  {
    id: 'seo',
    name: 'SEO Content',
    description: 'Search engine optimized content to improve your rankings',
    price: 69.99,
    category: 'SEO',
    imagePath: '/seo.png',
    badgeColor: 'bg-primary-lightest'
  }
] 