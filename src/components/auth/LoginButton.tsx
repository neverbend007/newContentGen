import { useAuth0 } from '@auth0/auth0-react'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  const handleLogin = () => {
    loginWithRedirect()
  }

  return (
    <button
      onClick={handleLogin}
      className="bg-neutral-black text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
    >
      Login
    </button>
  )
} 