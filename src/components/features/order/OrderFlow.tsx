import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { ROUTES } from '@/constants/routes'
import { OrderStep } from '@/types/order'
import { ContentTypeSelect } from './steps/ContentTypeSelect'
import { RequirementsForm } from './steps/RequirementsForm'
import { Preview } from './steps/Preview'
import { Payment } from './steps/Payment'

const steps: OrderStep[] = [
  {
    id: 1,
    title: 'Select Content Type',
    description: 'Choose the type of content you need',
    completed: false,
    current: true
  },
  {
    id: 2,
    title: 'Requirements',
    description: 'Specify your content requirements',
    completed: false,
    current: false
  },
  {
    id: 3,
    title: 'Preview',
    description: 'Review your generated content',
    completed: false,
    current: false
  },
  {
    id: 4,
    title: 'Payment',
    description: 'Complete your purchase',
    completed: false,
    current: false
  }
]

export const OrderFlow = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [orderData, setOrderData] = useState({
    contentType: '',
    requirements: {
      tone: '',
      keywords: [],
      targetAudience: '',
      competitors: [],
      additionalNotes: ''
    }
  })
  
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  const handleNext = () => {
    if (!isAuthenticated && currentStep === 1) {
      navigate(ROUTES.LOGIN)
      return
    }
    setCurrentStep(prev => prev + 1)
  }

  const handleBack = () => {
    setCurrentStep(prev => prev - 1)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between">
          {steps.map((step) => (
            <div 
              key={step.id}
              className={`flex-1 ${
                step.id !== steps.length ? 'border-b-2' : ''
              } ${
                step.completed || step.current ? 'border-primary' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.completed ? 'bg-primary' : 
                    step.current ? 'bg-white border-2 border-primary' : 
                    'bg-gray-200'
                  }`}
                >
                  {step.completed ? (
                    <CheckIcon className="w-5 h-5 text-white" />
                  ) : (
                    <span className={step.current ? 'text-primary' : 'text-gray-500'}>
                      {step.id}
                    </span>
                  )}
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium">{step.title}</p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {currentStep === 1 && (
          <ContentTypeSelect 
            selected={orderData.contentType}
            onSelect={(type) => setOrderData({ ...orderData, contentType: type })}
            onNext={handleNext}
          />
        )}
        {currentStep === 2 && (
          <RequirementsForm
            data={orderData.requirements}
            onChange={(requirements) => setOrderData({ ...orderData, requirements })}
            onBack={handleBack}
            onNext={handleNext}
          />
        )}
        {currentStep === 3 && (
          <Preview
            orderData={orderData}
            onBack={handleBack}
            onNext={handleNext}
          />
        )}
        {currentStep === 4 && (
          <Payment
            orderData={orderData}
            onBack={handleBack}
            onComplete={() => navigate(ROUTES.DASHBOARD)}
          />
        )}
      </div>
    </div>
  )
}

const CheckIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M5 13l4 4L19 7" 
    />
  </svg>
) 