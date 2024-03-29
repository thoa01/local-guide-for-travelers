import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppContext, AppProvider } from './contexts/app.context'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import useRouteElements from './useRouteElements'
import { useContext, useEffect } from 'react'
import { LocalStorageEventTarget } from './utils/auth'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0
    }
  }
})

function App() {
  const routeElements = useRouteElements()
  const { reset } = useContext(AppContext)
  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', reset)

    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        {routeElements}
        <ToastContainer />
      </AppProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
