import { Button } from '@/components/ui/button'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Users2 } from 'lucide-react'
import { Mail } from 'lucide-react'

export const Route = createLazyFileRoute('/')({
  component: Index
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <div className="flex flex-row gap-2 mt-4">
        <Button variant="outline">
          <Users2 className="mr-2 h-4 w-4" />
          Button 1
        </Button>
        <Button>
          <Mail className="mr-2 h-4 w-4" />
          Button 2
        </Button>
      </div>
    </div>
  )
}
