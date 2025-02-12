export interface ContentType {
  id: string
  name: string
  description: string
  icon: string
}

export interface Content {
  id: string
  type: ContentType
  title: string
  body: string
  status: 'draft' | 'published'
  createdAt: string
  updatedAt: string
} 