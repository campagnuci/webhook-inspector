import { createFileRoute } from '@tanstack/react-router'
import { WebhookDetails } from '../components/webhook-details'
import { Suspense } from 'react'
import { Loading } from '../components/loading'

export const Route = createFileRoute('/webhooks/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id } = Route.useParams()

  return (
    <Suspense fallback={<Loading />}>
      <WebhookDetails id={id} />
    </Suspense>
  )
}
