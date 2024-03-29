/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UsersUserIdImport } from './routes/users.$userId'
import { Route as PeopleIdImport } from './routes/people.$id'

// Create Virtual Routes

const UsersLazyImport = createFileRoute('/users')()
const PeopleLazyImport = createFileRoute('/people')()
const FilmsLazyImport = createFileRoute('/films')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const UsersLazyRoute = UsersLazyImport.update({
  path: '/users',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/users.lazy').then((d) => d.Route))

const PeopleLazyRoute = PeopleLazyImport.update({
  path: '/people',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/people.lazy').then((d) => d.Route))

const FilmsLazyRoute = FilmsLazyImport.update({
  path: '/films',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/films.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const UsersUserIdRoute = UsersUserIdImport.update({
  path: '/$userId',
  getParentRoute: () => UsersLazyRoute,
} as any)

const PeopleIdRoute = PeopleIdImport.update({
  path: '/$id',
  getParentRoute: () => PeopleLazyRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/films': {
      preLoaderRoute: typeof FilmsLazyImport
      parentRoute: typeof rootRoute
    }
    '/people': {
      preLoaderRoute: typeof PeopleLazyImport
      parentRoute: typeof rootRoute
    }
    '/users': {
      preLoaderRoute: typeof UsersLazyImport
      parentRoute: typeof rootRoute
    }
    '/people/$id': {
      preLoaderRoute: typeof PeopleIdImport
      parentRoute: typeof PeopleLazyImport
    }
    '/users/$userId': {
      preLoaderRoute: typeof UsersUserIdImport
      parentRoute: typeof UsersLazyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  FilmsLazyRoute,
  PeopleLazyRoute.addChildren([PeopleIdRoute]),
  UsersLazyRoute.addChildren([UsersUserIdRoute]),
])

/* prettier-ignore-end */
