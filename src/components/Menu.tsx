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
}

const MenuItem: React.FC<MenuItemProps> = ({ item, level, father }) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false)

  const handleSubMenuToggle: MouseEventHandler = (e) => {
    if (item.children)
      e.preventDefault()
    setSubMenuOpen(!isSubMenuOpen)
  }

  return (
    <li className={`pl-${level * 4} transition-all duration-300 ease-in-out`}>
      <Link to={item.children ? '' : `${father}/${item.path}`} onClick={handleSubMenuToggle}>{item.label}</Link>
      {item.children && (
        <ul className={`${isSubMenuOpen ? 'block' : 'hidden'}`}>
          {item.children.map((child, index) => (<MenuItem key={index} item={child} level={level + 1} father={item.path} />
          ))}
        </ul>
      )}
    </li>
  )
}

export const Menu: React.FC<MenuProps> = ({ routes }) => {
  return (
    <ul>
      {routes.map((route, index) => (<MenuItem key={index} item={route} level={0} father={route.path} />
      ))}
    </ul>
  )
}
