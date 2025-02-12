import { useAuth0 } from '@auth0/auth0-react'

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0()

  const handleSignUp = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup'
      }
    })
  }

  return (
    <button
      onClick={handleSignUp}
      className="text-gray-600 hover:text-gray-900"
    >
      Sign up
    </button>
  )
} 