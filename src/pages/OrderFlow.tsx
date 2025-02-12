import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentOrder } from '@/store/slices/orderSlice'

const OrderFlow = () => {
  const [step, setStep] = useState(1)
  const dispatch = useDispatch()

  const handleNext = () => {
    setStep(step + 1)
    // Example order data
    dispatch(setCurrentOrder({
      id: Date.now(),
      status: 'draft',
      step: step + 1
    }))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Order Flow</h1>
      {/* Add order flow content here */}
    </div>
  )
}

export default OrderFlow 