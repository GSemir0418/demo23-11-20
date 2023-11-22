import type { MouseEventHandler } from 'react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export interface Route {
  path: string
  label: string
  children?: Route[]
}
interface MenuProps {
  routes: Route[]
}
interface MenuItemProps {
  item: Route
  level: number
  father: string
  currentRoute: string
  setCurrentRoute: (route: string) => void
}

const MenuItem: React.FC<MenuItemProps> = ({ currentRoute, setCurrentRoute, item, level, father }) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false)

  const handleSubMenuToggle: MouseEventHandler = (e) => {
    if (item.children)
      e.preventDefault()
    setSubMenuOpen(!isSubMenuOpen)
  }

  return (
    <li>
      <Link
        to={item.children ? '' : `${father}/${item.path}`}
        onClick={(e) => {
          handleSubMenuToggle(e)
          if (!item.children)
            setCurrentRoute(item.label)
        }}
        className={`
          ${(item.children && isSubMenuOpen) ? 'text-[#6394d9]' : ''} 
          ${currentRoute === item.label ? 'bg-[#6394d961] text-[#6394d9] border-r-[#6394d9] border-r-2' : ''} 
          block p-1 rounded
        `}
      >
        <span className={`p-${level * 2}`}>{item.label}</span>
      </Link>
      {item.children && (
        <ul className={`${isSubMenuOpen ? 'block' : 'hidden'} bg-[#202020]`}>
          {item.children.map((child, index) => (<MenuItem key={index} item={child} level={level + 1} father={item.path} currentRoute={currentRoute} setCurrentRoute={setCurrentRoute} />
          ))}
        </ul>
      )}
    </li>
  )
}

export const Menu: React.FC<MenuProps> = ({ routes }) => {
  const [currentRoute, setCurrentRoute] = useState<string>('')

  return (
    <ul>
      {routes.map((route, index) => (<MenuItem key={index} item={route} level={0} father={route.path} currentRoute={currentRoute} setCurrentRoute={setCurrentRoute} />
      ))}
    </ul>
  )
}
