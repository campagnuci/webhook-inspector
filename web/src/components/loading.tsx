import { Loader2 } from 'lucide-react'

export function Loading() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-zinc-900">
      <Loader2 className="h-10 w-10 animate-spin text-zinc-300" />
      <p className="mt-4 text-zinc-300 text-medium font-medium">
        Loading
        <span className="inline-block animate-pulse-dot">.</span>
        <span className="inline-block animate-pulse-dot [animation-delay:0.2s]">
          .
        </span>
        <span className="inline-block animate-pulse-dot [animation-delay:0.4s]">
          .
        </span>
      </p>
    </div>
  )
}
