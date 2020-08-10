import React from 'react'
import { useRoutes } from 'hookrouter'
import { routes } from '@routes'

export const App = () => {
  const pages = useRoutes(routes)

  return <>{pages}</>
}
