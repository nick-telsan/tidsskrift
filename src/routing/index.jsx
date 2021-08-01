import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { About } from '../articles'
import { Welcome, Collections, Struggles, WinsAndLosses } from '../articles/2021/may'
import { SixMonths } from '../articles/2021/june'
import { SchoolAndMore } from '../articles/2021/july'
import { ArticlesSideBar } from '../components'
import { RouterContainer } from './styles'

export const Router = () => (
  <BrowserRouter>
    <RouterContainer>
      <ArticlesSideBar />
      <Switch>
        <Route path="/210723" component={SchoolAndMore} />
        <Route path="/210618" component={SixMonths} />
        <Route path="/210528" component={WinsAndLosses} />
        <Route path="/210522" component={Struggles} />
        <Route path="/210514" component={Collections} />
        <Route path="/210507" component={Welcome} />
        <Route path="/" component={About} />
      </Switch>
    </RouterContainer>
  </BrowserRouter>
)