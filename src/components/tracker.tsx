import { manualStats } from '../utils'

interface TrackerItemProps {
  item: {
    name: String
    title: String
    value: Number
  }
}

const TrackerItem = ({ item }: TrackerItemProps) => (
  <div class="flex">
    <span class="mr-auto pr-3">{`${item.title}: `}</span>
    <span class="ml-auto">{item.value}</span>
  </div>
)

export const Tracker = () => {
  return (
    <div class="m-2 bg-slate-400 rounded-md h-fit flex flex-col p-2 min-w-fit">
      <h2 class="text-xl text-center pb-2">Some Stats</h2>
      {manualStats.map((stat) => (
        <TrackerItem item={stat} />
      ))}
      <h2 class="text-xl text-center pt-2 pb-1">Currently Reading:</h2>
      <h3 class="max-w-[200px] text-center">The Go Programming Language</h3>
      <h3 class="max-w-[200px] text-center p-1">
        Drawing on the Right Side of the Brain
      </h3>
      <h3 class="max-w-[200px] text-center">Pathfinder: Second Edition</h3>
    </div>
  )
}
