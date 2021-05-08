import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { About, Welcome } from '../articles'
import { Navbar } from './navbar'

export const Router = () => {
  return (
    <BrowserRouter>
      <div style={{display: "flex", height: "100%", position: 'relative'}}>
        <Navbar />
        <Switch>
          <Route path="/2021-05-07">
            <Welcome />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}