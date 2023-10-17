import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import {sw} from '@stores'
import {Backdrop, ErrorPage, Home} from '@components'
import {ErrorBoundary} from '@components'
import {BrowserRouter} from 'react-router-dom'

export const App = observer(() => {
  useEffect(() => {
    sw.getSwApp()
  }, [])

  if (sw.isRequestStatusError('people')) return <ErrorPage />

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <link rel="icon" href="/favicon.ico" />
        {sw.isRequestStatusSuccess('app') && <Home />}
        {<Backdrop open={sw.isRequestStatusLoading('people')} />}
      </ErrorBoundary>
    </BrowserRouter>
  )
})
