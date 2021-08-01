import React from 'react'
import { ArticleTitle, StandardArticle } from '../../../components'

export const SixMonths = () => (
  <StandardArticle>
    <ArticleTitle 
      title="Six Months"
      date="2021-06-18"
    />

    <p>So, I've officially been at my company for seven months, nearly eight. But my six month review was pushed back further and further due to a number of reasons</p>
    <p>It was no one's fault, a lot of things just hit the fan for different people. Not at once, but staggered over roughly five weeks. Wasn't great for anyone.</p>
    <p>But, my review is done and I have a lot to work on.</p>

    <h2>The Positives?</h2>
    <p>Everyone always thinks I'm incredibly cheerful. My best friend and my wife have both laughed at this feedback before. I'm not a cheerful person - I'm a liar. But, it's a lie that hurts no one. It's okay to lie and act cheerful even when you're not feeling it. It's part of living with depression - a necessary skill to prevent people from either constantly fretting over you or constantly being upset with you.</p>
    <p>That's that neither here nor there, but it's something that has regularly come up in my jobs. I think only at Green Coffee Store was I ever not constantly cheerful, and that's just because that particular store was fucking awful.</p>

    <p>Other positive things were pretty much par for the course. Good stuff, but honestly, I felt it was a little too nice. I communicate well (a good thing, but basically a bare minimum requirement in my mind). I write good (enough) code. I work hard and can really push myself when I need to. Honestly, it was all focused around one particular week where I worked a 14-ish hour day. I've done more and can do better.</p>

    <p>There's definitely some imposter syndrome talking right now, but that's my hang up and I'll maybe deal with it. So long as it's not particularly destructive, it's not bad to be tough(ish) on yourself. Constant iteration is important.</p>

    <h2>The Needs Improvements</h2>
    <p>There was nothing negative in my review. But, there were a few things that I definitely need to work on. Most of these things I had self-evaluated before, but they came with some helpful advice in the actual review.</p>
    <ul>
      <li>
        <em>1. A general better understanding of DOM</em>
        <p>Previously, the applications I worked on were done with in a way that was fine, but not necessarily the most efficient way to do things. We relied, and abused, state. It was what I was taught. It's still weird for me to not use it constantly. In my current project, I've learned how to utilize DOM and references to prevent unnecessary renders, but there's still a lot more to learn. My manager has an idea for a simple project that would be interaction intesensive to help me understand it. I'll probably see if I can find some other advice on my own as well.</p>
        <p>I think this is actually a weakness of learning React as my first real JS framework. State is a natural thing to lean on. It's very powerful, but it's not necessary to over-utilise it like I have in other projects.</p>
      </li>
      <li>
        <em>2. Better Code Architecture</em>
        <p>This kinda goes hand in hand with 1. I need to get better at writing good code. Now, this site is meant to be shitty, but I've got some other projects that I can work on in my spare time. My manager has a few books. I've also got a couple. I'll be doing some reading.</p>
      </li>
      <li>
        <em>3. Write a blog post</em>
        <p>So, these don't count because they're not on my company website, and also aren't high quality. I need to make a nice blog post about something. Essenntially becoming a subject matter expert on that. I've got no idea what I want to use. Maybe talk about SnowPack vs. WebPack and some other things. IDK.</p>
      </li>
      <li>
        <em>4. Consult More</em>
        <p>So, this one is the hardest one for me. The other three are really just practice and work. But consulting and voicing my opinion in a business situation is hard. I don't feel well equipped to explain why I think that something is right or wrong. I don't know how to get better at it, other than just doing it. I think, largely, that's what I have to do.</p>
        <p>In a perfect world, I'd be able to see the issue, schedule a meeting with one of my senior devs, and chat about it, then return with my (educated) opinion, but if I'm put on the spot, then well, I don't know.</p>
      </li>
    </ul>
    <p>So, yeah, things to work on. I think I'll add some more to this list for my professional develeopment. Making more money is valuable to me. I'd like to eventually, ya know, own a house.</p>
  
    <h2>What Else?</h2>
    <p>I'm working on a world map redesign post for Thalomir. Basically, my world map corrupted somewhere (I blame OneDrive). So, I'm taking the opportunity to rebuild some of it. I'm also trying to put together the required TeX packages to build my game notes in XeTeX. TeX has 0 right to be as hard as it is. I'm still not sure it's worth it.</p>

  </StandardArticle>
)