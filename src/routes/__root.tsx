import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='p-2 flex gap-2'>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>
        <Link to='/users' className='[&.active]:font-bold'>
          Users
        </Link>
        <Link to='/people' className='[&.active]:font-bold'>
          People
        </Link>
        <Link to='/films' className='[&.active]:font-bold'>
          Films
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
