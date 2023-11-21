import React from 'react'
import { Menu } from './Menu'
import { routes } from '@/router/router'

interface Props {}
export const Sider: React.FC<Props> = () => {
  return (
    <div className=" bg-blue-200 w-40 h-full max-h-screen -mb-20 sm:block hidden overflow-scroll">
      <Menu routes={routes[0].children} />
    </div>
  )
}
