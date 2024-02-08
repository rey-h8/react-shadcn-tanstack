import { Mail } from 'lucide-react'
import { Button } from './components/ui/button'

function App() {
  return (
    <>
      <div className="flex flex-row justify-center items-center h-screen bg-slate-400">
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
      </div>
    </>
  )
}

export default App
