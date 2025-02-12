import { ContentType } from '@/types/content'
import classNames from 'classnames'

interface ServiceCardProps {
  service: ContentType
  selected?: boolean
  onClick?: () => void
}

export const ServiceCard = ({ service, selected, onClick }: ServiceCardProps) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        'p-6 rounded-lg shadow-md cursor-pointer transition-all',
        'hover:shadow-lg hover:scale-105',
        selected ? 'bg-primary/5 border-2 border-primary' : 'bg-white'
      )}
    >
      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  )
} 