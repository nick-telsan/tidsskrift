import { FunctionalComponent } from 'preact'
import { Body, Header, Tracker } from './components'
import './index.css'

const App: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <Header />
      <div class="flex max-w-screen-xl m-auto">
        <Body />
        <Tracker />
      </div>
    </div>
  )
}

export default App
