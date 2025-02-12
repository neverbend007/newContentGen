import { useAuth0 } from '@auth0/auth0-react'

export const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className="bg-neutral-black text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
    >
      Log Out
    </button>
  )
} 