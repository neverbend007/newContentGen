import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { updateBrandSettings } from '@/store/slices/brandSlice'

const Settings = () => {
  const dispatch = useDispatch()
  const brandSettings = useSelector((state: RootState) => state.brand.settings)

  const handleBrandNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateBrandSettings({ name: e.target.value }))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Brand Settings</h3>
            <div className="mt-2">
              <label htmlFor="brandName" className="block text-sm font-medium text-gray-700">
                Brand Name
              </label>
              <input
                type="text"
                name="brandName"
                id="brandName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                value={brandSettings.name}
                onChange={handleBrandNameChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings 