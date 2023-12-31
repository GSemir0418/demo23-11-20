import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Route } from './Menu'
import { Icons } from './Icons'

interface HorizontalMenuProps {
  routes: Route[]
  fold: boolean
  unfold: () => void
}

export const HorizontalMenu: React.FC<HorizontalMenuProps> = ({ routes, fold, unfold }) => {
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null)
  const [currentRoute, setCurrentRoute] = useState<string>('')
  const handleClick = (item: Route) => {
    unfold()
    setSelectedRoute(item.children ? item : null)
  }
  const handleChildClick = (item: string) => {
    setCurrentRoute(item)
  }
  return (
    <>
      <div className="flex-shrink-0 h-8 text-headerText flex items-center p-1">
        {routes.length && routes.map((route, index) => {
          return (
            <span
              key={index}
              onClick={() => { handleClick(route) }}
              className={`mr-7 cursor-pointer ${route.label === selectedRoute?.label && 'border-b-2 border-headerTopHigh text-headerTopHigh'}`}
            >
              {route.label}
            </span>
          )
        })}
      </div>
      <div className={`flex-1 text-headerText p-1 flex items-center flex-row transition-all duration-200 ease-in-out ${!fold ? 'opacity-100' : 'opacity-0'}`}>
        {selectedRoute && selectedRoute.children?.map((route, index) => {
          return (
            <Link
              onClick={() => { handleChildClick(route.label) }}
              className={`mr-7 p-1 rounded-md flex flex-col justify-center items-center cursor-pointer text-center text-xs mt-1 ${route.label === currentRoute && 'bg-headerBottomHigh text-headerTopHigh shadow-lg'}`}
              to={`${selectedRoute.path}/${route.path}`}
              key={index}
            >
              <Icons index={index} />
              <span className="pt-1">{route.label}</span>
            </Link>
          )
        })}
      </div>
    </>
  )
}
