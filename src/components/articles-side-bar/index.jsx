import React from 'react'
import { ArticlesBarContainer, ArticleLink, ArticleHeading } from './styles'

export const ArticlesSideBar = () => (
  <ArticlesBarContainer>
    <ArticleLink to="/">About</ArticleLink>
    <ArticleHeading>Recent Articles</ArticleHeading>
    <ArticleLink to="/210801">Facilities of Eisolan Chapter 1 Retrospective</ArticleLink>
    <ArticleLink to="/210723">School and More</ArticleLink>
    <ArticleLink to="/210618">Six Months</ArticleLink>
    <ArticleLink to="/210528">Wins and Losses</ArticleLink>
    <ArticleLink to="/210522">Struggles</ArticleLink>
    <ArticleLink to="/210514">Collections are Bad (for me)</ArticleLink>
    <ArticleLink to="/210507">Welcome to the Garage</ArticleLink>
  </ArticlesBarContainer>
)