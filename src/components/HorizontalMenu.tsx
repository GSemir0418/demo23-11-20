import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Route } from './Menu'

interface HorizontalMenuProps {
  routes: Route[]
}

export const HorizontalMenu: React.FC<HorizontalMenuProps> = ({ routes }) => {
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null)
  const handleClick = (item: Route) => {
    setSelectedRoute(item.children ? item : null)
  }
  return (
    <>
      <div className="h-6 bg-slate-300">
        {routes.length && routes.map((route, index) => {
          return <span key={index} onClick={() => { handleClick(route) }} className=" bg-yellow-200">{route.label}</span>
        })}
      </div>
      <div className=" h-14 bg-slate-500">
        {selectedRoute && selectedRoute.children?.map((route, index) => {
          return <Link to={`${selectedRoute.path}/${route.path}`} key={index}>{route.label}</Link>
        })}
      </div>
    </>
  )
}
