export type OrderStatus = 'draft' | 'pending' | 'processing' | 'completed' | 'cancelled'

export interface OrderStep {
  id: number
  title: string
  description: string
  completed: boolean
  current: boolean
}

export interface OrderDetails {
  id: string
  serviceId: string
  contentType: string
  requirements: {
    tone: string
    keywords: string[]
    targetAudience: string
    competitors: string[]
    additionalNotes: string
  }
  status: OrderStatus
  createdAt: string
  updatedAt: string
} 