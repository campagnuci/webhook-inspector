import { Link, useParams } from '@tanstack/react-router'
import { IconButton } from "./ui/icon-button"
import { Trash2Icon } from 'lucide-react'
import { Checkbox } from "./ui/checkbox"
import { formatDistanceToNow } from 'date-fns'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { twMerge } from 'tailwind-merge'

interface WebhooksListItemProps {
  webhook: {
    id: string
    method: string
    pathname: string
    createdAt: Date
  }
  onWebhookChecked: (webhookId: string) => void
  isWebhookChecked: boolean
  isLoadedItem: boolean
}

export function WebhooksListItem ({ webhook, onWebhookChecked, isWebhookChecked, isLoadedItem }: WebhooksListItemProps) {
  const queryClient = useQueryClient()
  const { id } = useParams({ strict: false })
  const { mutate: deleteWebhook } = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`http://localhost:3333/api/webhooks/${id}`, {
        method: 'DELETE',
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['webhooks']
      })
    }
  })

  console.log(id)

  return (
    <div
      className={twMerge(
        "group rounded-lg transition-colors duration-150 hover:bg-zinc-700/30",
        isLoadedItem && 'bg-violet-300/20 hover:bg-violet-300/30'
      )}
    >
      <div className="flex items-start gap-3 px-4 py-2.5">
        <Checkbox onCheckedChange={() => onWebhookChecked(webhook.id)} checked={isWebhookChecked} />
        <Link
          to="/webhooks/$id"
          params={{ id: webhook.id }}
          className="flex flex-1 min-w-0 items-start gap-3"
        >
          <span className="w-12 shrink-0 font-mono text-xs font-semibold text-zinc-300 text-right">{webhook.method}</span>
          <div className="flex-1 min-w-0">
            <p className="truncate text-xs text-zinc-200 leading-tight font-mono">{webhook.pathname}</p>
            <p
              className={twMerge(
                "text-xs text-zinc-500 font-medium mt-1",
                isLoadedItem && 'text-zinc-300'
              )}
            >
              {formatDistanceToNow(webhook.createdAt, { addSuffix: true })}
            </p>
          </div>
        </Link>
        <IconButton
          icon={<Trash2Icon className={twMerge("size-3.5 text-zinc-400", isLoadedItem && 'text-zinc-300')} />}
          className="opacity-0 transition-opacity group-hover:opacity-100"
          onClick={() => deleteWebhook(webhook.id)}
        />
      </div>
    </div>
  )
}
