import React from 'react'
import { ArticleTitle } from '../components/article-title'
import { StandardArticle } from '../components/standard-article'
import { ArticleAchor } from '../components/styles'

export const About = () => {
  return (
    <StandardArticle>
      <ArticleTitle
        title="My Garage"
      />

      <p>
        I recently ran across the idea of <ArticleAchor href='https://notes.andymatuschak.org/z21cgR9K3UcQ5a7yPsj2RUim3oM2TzdBByZu'>working with the garage door open</ArticleAchor>. One of my colleauges posted another link to Andy's notes, and I really liked the idea.
      </p>
      <p>
        Okay, to be honest, I really hate the idea of letting everyone see what I'm working on... but the idea is still a seemingly good one. This isn't a place for pretty. The ideas are going to be raw and incomplete. The work will sometimes be shitty... But, theoretically, it could mean someone can pop up and tell me that I'm doing something wrong or the hard way.
      </p>
      <p>I don't know if I'll keep this more than like two posts. I've never managed to keep blogs, but at least I'll try.</p>
      <p>Don't expect much from this blog. Slowly, it'll get more sophisticated, but until then... it's gonna be gross. Buckle up, boys, we're getting into real shit.</p>

      <h3>What to expect</h3>
      <ul>
        <li>
          Dev work (learning, experimenting, crying)
        </li>
        <li>
          TTRPG work (see above)
        </li>
        <li>
          Other things I try
        </li>
        <li>
          Maybe some blog-style life posts
        </li>
      </ul>
      <h3>What not to expect</h3>
      <ul>
        <li>A regular posting schedule</li>
        <li>Actual work stuff - those posts belong on the company site</li>
        <li>Completed stuff</li>
      </ul>
      <h3>Anyways...</h3>
      <p>The site is still very under construction. It'll evolve as I feel like working on it. Maybe one day I'll even rewrite this page.</p>
    </StandardArticle>
  )
}