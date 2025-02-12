import { useState } from 'react'
import { OrderDetails } from '@/types/order'

interface RequirementsFormProps {
  data: OrderDetails['requirements']
  onChange: (requirements: OrderDetails['requirements']) => void
  onBack: () => void
  onNext: () => void
}

export const RequirementsForm = ({
  data,
  onChange,
  onBack,
  onNext
}: RequirementsFormProps) => {
  const [keywords, setKeywords] = useState<string>('')
  const [competitors, setCompetitors] = useState<string>('')

  const handleKeywordsChange = (value: string) => {
    setKeywords(value)
    const keywordArray = value.split(',').map(k => k.trim()).filter(Boolean)
    onChange({ ...data, keywords: keywordArray })
  }

  const handleCompetitorsChange = (value: string) => {
    setCompetitors(value)
    const competitorArray = value.split(',').map(c => c.trim()).filter(Boolean)
    onChange({ ...data, competitors: competitorArray })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Content Requirements</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Content Tone
        </label>
        <select
          value={data.tone}
          onChange={(e) => onChange({ ...data, tone: e.target.value })}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        >
          <option value="">Select tone</option>
          <option value="professional">Professional</option>
          <option value="casual">Casual</option>
          <option value="friendly">Friendly</option>
          <option value="authoritative">Authoritative</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Target Keywords (comma-separated)
        </label>
        <input
          type="text"
          value={keywords}
          onChange={(e) => handleKeywordsChange(e.target.value)}
          placeholder="e.g., digital marketing, SEO, content strategy"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Target Audience
        </label>
        <input
          type="text"
          value={data.targetAudience}
          onChange={(e) => onChange({ ...data, targetAudience: e.target.value })}
          placeholder="e.g., Small business owners aged 30-50"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Competitor URLs (comma-separated)
        </label>
        <input
          type="text"
          value={competitors}
          onChange={(e) => handleCompetitorsChange(e.target.value)}
          placeholder="e.g., competitor1.com, competitor2.com"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes
        </label>
        <textarea
          value={data.additionalNotes}
          onChange={(e) => onChange({ ...data, additionalNotes: e.target.value })}
          rows={4}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          placeholder="Any specific requirements or preferences..."
        />
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={onBack}
          className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!data.tone || !data.targetAudience}
          className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md disabled:opacity-50"
        >
          Next Step
        </button>
      </div>
    </div>
  )
} 