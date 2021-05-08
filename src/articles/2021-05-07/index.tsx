import { ArticleTitle, ArticleContainer } from '../../components'

export const Welcome = () => {
  return (
    <ArticleContainer>
      <ArticleTitle 
        title="Welcome to the Garage"
      />
      <p>
        So, for whatever reason, you're here... reading the first real post on this site. It's not going to be much.
      </p>
      <p>By the time I post this, the site will have the absolute bare minimum navigation and basically nothing else. I'm building this site with React because I'm familiar with it.</p>
      <p>Originally, I was planning on making this HTML, CSS, and vanilla JS, but... well... that was quickly becoming more cumbersome than fun. Could I have done it? Sure, but it would mean spending more time building the garage than actually working on projects.</p>
      <p>No, this site needs to be functional, but only barely. Slowly, I'll add new components and fun toys. I'll get specific about layouts and add fun loaders and animations. This particular site isn't the place for experiments - those belong in projects - but once I've learned how to do something, might as well add it to the wall.</p>
      <p>Anyways, this article is really all about what is on my mind right now.</p>

      <h3>The projects</h3>
      <p>I've always got a few things I'm working on. Yesterday at work, we had a demo of Svelte, and that was pretty cool. However, I was fixated on something else. Another developer posted a link that led me to <a href='https://notes.andymatuschak.org/z21cgR9K3UcQ5a7yPsj2RUim3oM2TzdBByZu'>this post</a>. Combined with learning about new tech, I set out to build this site and set up a somewhat lofty set of goals. Most of those goals can stay in my notes. This isn't the place to keep track of everything going on in my head. This is a place to talk about what I'm actually working on... so...</p>
      <ul>
        <li>
          <em>The Garage</em>
          <p>It's this site. It's a static site built in React. Might evolve some.</p>
        </li>
        <li>
          <em>Recipe Book</em>
          <p>I'm toying around with a few ideas, but I want a place to record all the recipes my wife and I like - especially the ones we tweak. I'm debating whether I want this only hosted locally via a raspberry pi (likely making it a site like this), or if I want to get fancier and use some CMS. Main reason I see to use a CMS is to make it easier for her to add posts (and to learn more about them?).</p>
        </li>
        <li>
          <em>Friend's Site</em>
          <p>A <em>while</em> ago, a friend asked for a professional site. Things happened and we never got around to finishing it, which is a shame because we only lacked one screen. Anyways, it's built in React right now. Thinking about adding some serverless stuff with AWS Lambda so they can easily change what images and text is displayed on the site.</p>
        </li>
        <li>
          <em>Wirtshaus</em>
          <p>Another React app. I use it for some TTRPG stuff. Right now, it's pretty bare bones, but I want to hook it up to either a Go or Elixir backend for some really cool stuff. Way too complicated to detail everything here, but my next goal is character sheets.</p>
        </li>
      </ul>
      <p>That was a lot of dev crap, but there's more.</p>
      <ul>
        <li>
          <em>Champions and Legends systems</em>
          <p>My own forks of DnD 5e. Champion's is basically my take on 5e and Legends is a "RPG in a box" version meant for one shots or light gameplay</p>
        </li>
        <li>
          <em>Art Stuff</em>
          <p>Yeah, there's way too much in this list right, but also I'd like to learn how to draw with the ultimate goal of 3D modeling (and printing) with maybe some animation work... I've been watching a lot animation break downs...</p>
        </li>
        <li>
          <em>Crafting</em>
          <p>A general title for becoming more handy. This will happen in my literal garage. Or backyard.</p>
        </li>
        <li>
          <em>Baking</em>
          <p>I really enjoy baking bread. I want to do it more and try more complicated breads and pastries. Let there be carbs.</p>
        </li>
      </ul>

      <h3>The other stuff</h3>
      <p>This place is also fine for posting about what I'm trying personally. For example, I've been doing some weight loss stuff. I was doing well until we moved. Now, I've regained a couple of pounds. Anyways, I want to get generally healthier.</p>
      <p>Speaking of getting healthier, I also need to work on setting better mental health problems. Sitting in one room all day ain't great.</p>
      <p>Finally, I'll be actually working in an office for the first time in my life. I imagine there will be some stuff about that.</p>

      <h3>Closing thoughts</h3>
      <p>I think that's about it right now. Don't expect more, but maybe there will be more... Now to get this up on the internets.</p>
    </ArticleContainer>
  )
}