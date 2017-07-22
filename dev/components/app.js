import React from 'react'

import HomeFilter from './homes-filter/asmart-comp'
import HomeList from './homes-list/asmart-comp'

import { Ssection } from './main-styles'

//1.)This is the main layout of the App.
//Not really much of a component, but it serves
//to centralize all the other components and
//lays them out which is then displayed as the main UI.
//2.)It also serves the styles scss to all the components.
const App = () => (
  <Ssection>
    <HomeFilter />
    <HomeList />
  </Ssection>
)

export default App