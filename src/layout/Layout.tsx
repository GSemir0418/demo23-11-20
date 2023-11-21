import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sider } from '@/components/Sider'

interface Props {}
export const Layout: React.FC<Props> = () => {
  return (
    <div className=" bg-black h-[100vh] w-[100vw] relative flex flex-col">
      <div className=" bg-red-200 w-full h-20 flex-shrink-0">Header</div>
      <div className=" flex flex-row flex-1">
        <Sider />
        <div className=" bg-slate-200 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
