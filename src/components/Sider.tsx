import React from 'react'
import { Menu } from './Menu'
import { routes } from '@/router/router'

interface Props {}
export const Sider: React.FC<Props> = () => {
  return (
    <div className="bg-[#242525] text-[#c8c5be] w-44 h-full max-h-screen -mb-28 sm:block hidden overflow-scroll p-2">
      <Menu routes={routes[0].children} />
    </div>
  )
}
