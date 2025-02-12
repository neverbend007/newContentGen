import { CONTENT_TYPES } from '@/constants/content-types'
import { ServiceCard } from '@/components/shared/ServiceCard'

interface ContentTypeSelectProps {
  selected: string
  onSelect: (type: string) => void
  onNext: () => void
}

export const ContentTypeSelect = ({
  selected,
  onSelect,
  onNext
}: ContentTypeSelectProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Select Content Type</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {CONTENT_TYPES.map((type) => (
          <ServiceCard
            key={type.id}
            service={type}
            selected={selected === type.id}
            onClick={() => onSelect(type.id)}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <button
          onClick={onNext}
          disabled={!selected}
          className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md disabled:opacity-50"
        >
          Next Step
        </button>
      </div>
    </div>
  )
} 