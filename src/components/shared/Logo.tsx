import { Link } from 'react-router-dom'

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-bold">
        <span className="text-primary-lightest">Content</span>
        <span className="text-primary-DEFAULT">Gen</span>
      </span>
    </Link>
  )
} 