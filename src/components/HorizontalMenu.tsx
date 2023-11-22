import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Route } from './Menu'
import { Icons } from './Icons'

interface HorizontalMenuProps {
  routes: Route[]
}

export const HorizontalMenu: React.FC<HorizontalMenuProps> = ({ routes }) => {
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null)
  const [currentRoute, setCurrentRoute] = useState<string>('')
  const handleClick = (item: Route) => {
    setSelectedRoute(item.children ? item : null)
  }
  const handleChildClick = (item: string) => {
    setCurrentRoute(item)
  }
  return (
    <>
      <div className="flex-shrink-0 h-8 text-[#c8c5be] flex items-center p-1">
        {routes.length && routes.map((route, index) => {
          return (
            <span
              key={index}
              onClick={() => { handleClick(route) }}
              className={`mr-7 cursor-pointer ${route.label === selectedRoute?.label && 'border-b-2 border-[#6394d9] text-[#6394d9]'}`}
            >
              {route.label}
            </span>
          )
        })}
      </div>
      <div className="flex-1 text-[#c8c5be] p-1 flex items-center flex-row">
        {selectedRoute && selectedRoute.children?.map((route, index) => {
          return (
            <Link
              onClick={() => { handleChildClick(route.label) }}
              className={`mr-7 p-1 rounded-md flex flex-col justify-center items-center cursor-pointer text-center text-xs mt-1 ${route.label === currentRoute && 'bg-[#414141] text-[#6394d9] shadow-lg'}`}
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
