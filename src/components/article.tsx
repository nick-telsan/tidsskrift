import type { ComponentChildren } from 'preact'
import { useState } from 'preact/hooks'
import { ExpandMore } from '../assets'

type ChildrenProps = {
  heading?: String
  children: ComponentChildren
}

export const Article = ({ children }: ChildrenProps) => (
  <div class="p-2">{children}</div>
)

export const Title = ({ children }: ChildrenProps) => (
  <h1 class="text-center text-slate-300 text-2xl pb-2 font-bold">{children}</h1>
)

export const Heading = ({ children }: ChildrenProps) => (
  <h2 class="text-slate-300 text-xl py-2 mb-4 font-bold border-b-2 border-b-slate-300">
    {children}
  </h2>
)

export const Subheading = ({ children }: ChildrenProps) => (
  <h3 class="text-slate-300 text-lg py-2 font-bold">{children}</h3>
)

export const Text = ({ children }: ChildrenProps) => (
  <p class="text-slate-300 leading-8 pb-2 px-1">{children}</p>
)

export const SignOff = () => (
  <div class="w-full text-right mt-4">
    <p class="text-slate-300 px-1 text-lg">Peace Out</p>
    <p class="text-slate-300 pb-2">n.evergrown</p>
  </div>
)

export const CollapsibleHeading = ({ heading, children }: ChildrenProps) => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <>
      <button
        class="flex w-full border-b-2 border-b-slate-300 py-2 mb-4"
        onClick={() => setCollapsed(!collapsed)}
      >
        <h2 class="text-slate-300 text-xl font-bold">{heading}</h2>
        <ExpandMore />
      </button>
      {!collapsed && children}
    </>
  )
}
