import React from 'react'
import { ArticleStyledTitle } from '../styles'

export const ArticleTitle = ({title, date}) => (
  <div>
    <ArticleStyledTitle date={date} >{title}</ArticleStyledTitle>
    <span>{date}</span>
  </div>
)