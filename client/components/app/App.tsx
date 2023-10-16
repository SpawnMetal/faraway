import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import {getSw} from '@api'
import {sw} from '@stores'
import {Backdrop, ErrorPage, Home} from '@components'
import {ErrorBoundary} from '@components'
import {BrowserRouter} from 'react-router-dom'

export const App = observer(() => {
  useEffect(() => {
    sw.setRequestStatusLoading('app')
    sw.setRequestStatusLoading('people')
    getSw()
      .then(() => {
        sw.setRequestStatusSuccess('people')
        sw.setRequestStatusSuccess('app')
      })
      .catch(() => {
        sw.setRequestStatusError('people')
        sw.setRequestStatusError('app')
      })
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
