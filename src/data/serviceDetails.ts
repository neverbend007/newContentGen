interface ServiceDetail {
  description: string
  example: {
    title?: string
    content: string
    meta?: string
  }
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'blog': {
    description: `Our professional blog writing service combines competitive analysis and keyword research to create industry-specific content that resonates with your target audience. Each blog post is crafted using our 7-11-4 framework, ensuring optimal engagement through strategic headings, carefully researched statistics, and brand-aligned messaging. We analyze your competitors' content strategies to identify gaps and opportunities, delivering posts that establish your authority in your industry while maintaining your unique brand voice.`,
    example: {
      title: "10 Emerging E-commerce Trends Reshaping Online Retail in 2025",
      content: `The intersection of AI and personalized shopping experiences has revolutionized how consumers interact with online stores. Our analysis shows that 73% of successful e-commerce businesses have adopted AI-driven recommendation engines, resulting in a 31% increase in average order value. In this comprehensive guide, we'll explore how leading brands are leveraging these technologies to create immersive shopping experiences...`
    }
  },
  'social-media': {
    description: `Transform your social media presence with AI-generated posts that drive engagement and build brand awareness. Our social content is created by analyzing trending topics in your industry, competitor social performance, and your brand guidelines to ensure each post maintains consistency while maximizing impact. Each piece is optimized for platform-specific requirements and includes suggested hashtags, optimal posting times, and engagement prompts that encourage meaningful interactions with your audience.`,
    example: {
      content: `🚀 Ready to revolutionize your supply chain? Our new AI-powered inventory management system has helped businesses:

📈 Reduce stockouts by 45%
💰 Cut carrying costs by 28%
⚡️ Speed up fulfillment by 3x

Learn how at [link] #SupplyChainInnovation #InventoryManagement`
    }
  },
  'product-desc': {
    description: `Convert browsers into buyers with compelling product descriptions that highlight key benefits while maintaining SEO optimization. Our AI analyzes top-performing product listings in your market to identify key selling points and persuasive language patterns, then generates descriptions that incorporate your brand voice and industry-specific keywords. Each description is structured to address common customer pain points while emphasizing your product's unique value proposition.`,
    example: {
      title: "EcoFlow Pro Standing Desk | Premium Bamboo Series",
      content: `Transform your workspace with the EcoFlow Pro Standing Desk, where sustainability meets innovation. Crafted from premium bamboo sourced from certified sustainable forests, this desk adjusts silently from 24" to 50" in seconds. The dual-motor system supports up to 350lbs while maintaining whisper-quiet operation at just 45dB. With built-in wireless charging and smart height presets, it's not just a desk – it's your productivity partner...`
    }
  },
  'email': {
    description: `Engage your subscriber base with professionally crafted email newsletters that drive opens, clicks, and conversions. Our AI studies your past email performance and competitor campaigns to generate content that resonates with your audience. Each newsletter is designed to maintain consistent brand messaging while incorporating industry trends, segmentation considerations, and proven email marketing principles to maximize engagement and minimize unsubscribe rates.`,
    example: {
      title: "Subject: Your Q1 Marketing Strategy Needs These 5 AI Tools 🎯",
      content: `Hi [Name],

Remember when social media management meant endless hours of content creation? Those days are over. This week, we're diving into the AI tools that are helping our clients save 15+ hours per week on content creation while seeing a 40% increase in engagement.

In this newsletter:
• Case Study: How [Client] automated their content calendar
• Exclusive discount on our new AI Marketing Suite
• Free template: AI-powered content strategy planner...`
    }
  },
  'technical': {
    description: `Deliver clear, accurate, and comprehensive technical documentation that simplifies complex concepts for your audience. Our technical writing service combines industry best practices with your brand guidelines to create documentation that maintains professionalism while being accessible. Whether it's user guides, API documentation, or technical specifications, each piece is structured to provide maximum clarity while adhering to technical writing standards and your brand's tone of voice.`,
    example: {
      title: "API Documentation: User Authentication Endpoints",
      content: `POST /api/v1/auth/login
Authenticate a user and receive an access token.

Request Body:
{
  "email": string,
  "password": string,
  "mfa_token": string (optional)
}

Response:
200 OK
{
  "access_token": string,
  "refresh_token": string,
  "expires_in": number
}

Error Responses:
401 Unauthorized - Invalid credentials
403 Forbidden - MFA required...`
    }
  },
  'seo': {
    description: `Boost your search engine rankings with strategically optimized content that targets high-value keywords in your industry. Our AI analyzes your competitors' SEO performance, identifies keyword opportunities, and generates content that balances search engine optimization with engaging readability. Each piece is structured to address search intent while incorporating proper heading hierarchy, meta descriptions, and internal linking suggestions to maximize your content's search visibility.`,
    example: {
      title: "Complete Guide to Zero-Waste Manufacturing: Reducing Industrial Waste in 2025",
      meta: "Learn how to implement zero-waste manufacturing processes with our comprehensive guide. Discover practical strategies, cost benefits, and real case studies from industry leaders.",
      content: `Implementing zero-waste manufacturing isn't just environmentally responsible – it's a competitive advantage. Our research shows that companies adopting zero-waste initiatives save an average of 28% on waste management costs while increasing their market share by 12%. In this comprehensive guide, we'll explore proven strategies that leading manufacturers use to minimize waste while maximizing profitability...`
    }
  }
} 