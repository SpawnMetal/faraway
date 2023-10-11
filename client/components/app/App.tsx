import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import {getSw} from '@api'
import {sw} from '@stores'
import {Backdrop, ErrorPage, Home} from '@components'
import {ErrorBoundary} from '@components'

export const App = observer(() => {
  useEffect(() => {
    sw.setRequestStatusLoading('people')
    getSw()
      .then(() => sw.setRequestStatusSuccess('people'))
      .catch(() => sw.setRequestStatusError('people'))
  }, [])

  if (sw.isRequestStatusError('people')) return <ErrorPage />

  return (
    <ErrorBoundary>
      <link rel="icon" href="/favicon.ico" />
      {sw.isRequestStatusSuccess('people') && <Home />}
      {<Backdrop open={sw.isRequestStatusLoading('people')} />}
    </ErrorBoundary>
  )
})
