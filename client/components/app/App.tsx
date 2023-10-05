import React, {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
import {getSw} from '@api'
import {sw} from '@stores'
import {Home} from '@components'

export const App = observer(() => {
  useEffect(() => {
    sw.setRequestStatusLoading()
    getSw()
      .then(() => sw.setRequestStatusSuccess())
      .catch(() => {
        sw.setRequestStatusError()
      })
  }, [])

  return sw.isRequestStatusSuccess && <Home />

  // return (
  //   <div
  //     onClick={() => {
  //       sw.setRequestStatusLoading()
  //       getSw()
  //         .then(() => sw.setRequestStatusSuccess())
  //         .catch(() => {
  //           sw.setRequestStatusError()
  //         })
  //     }}
  //   >
  //     Worked!
  //   </div>
  // )
})
