import type { ComponentChildren } from 'preact'

type ChildrenProps = {
  children: ComponentChildren
}

export const Article = ({ children }: ChildrenProps) => (
  <div class="p-2">{children}</div>
)

export const Title = ({ children }: ChildrenProps) => (
  <h1 class="text-center text-slate-300 text-2xl pb-2 font-bold">{children}</h1>
)

export const Heading = ({ children }: ChildrenProps) => (
  <h2 class="text-slate-300 text-xl py-2 font-bold">{children}</h2>
)

export const Subheading = ({ children }: ChildrenProps) => (
  <h3 class="text-slate-300 text-lg py-2 font-bold">{children}</h3>
)

export const Text = ({ children }: ChildrenProps) => (
  <span class="text-slate-300 leading-8">{children}</span>
)
