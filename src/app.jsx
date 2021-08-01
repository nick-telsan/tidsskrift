import React from 'react'
import { MainNavBar } from './components'
import { Router } from './routing'

export default function App() {
  return (
    <div>
      <MainNavBar />
      <Router/>
    </div>
  )
}