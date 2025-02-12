import { Auth0Provider } from '@auth0/auth0-react'

export const Auth0ProviderWithNavigate = ({ children }: { children: React.ReactNode }) => {
  const domain = 'dev-6c487aizzefsuxdk.us.auth0.com'
  const clientId = 'lNHLRbYd2JVr8z9p4npSK2fgsrNBJDyj'

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      {children}
    </Auth0Provider>
  )
} 