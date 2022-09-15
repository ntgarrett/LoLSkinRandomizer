import { useState } from 'react'

import Header from '../components/Header'

const HeaderContainer = props => {
  const { patch, user, dispatch, setSelectedChampion, resetState } = props

  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <Header
      patch={patch}
      user={user}
      dispatch={dispatch}
      setSelectedChampion={setSelectedChampion}
      drawerOpen={drawerOpen}
      setDrawerOpen={setDrawerOpen}
      resetState={resetState}
    />
  )
}

export default HeaderContainer
