import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sider } from '@/components/Sider'
import { Header } from '@/components/Header'
import { useThemeStore } from '@/store/useThemeStore'

interface Props {}
export const Layout: React.FC<Props> = () => {
  const { theme } = useThemeStore()
  return (
    <div className={`bg-globalBg h-[100vh] w-[100vw] relative flex flex-col theme-${theme}`}>
      <Header />
      <div className="flex flex-row flex-1">
        <Sider />
        <div className="bg-mainBg flex-1 p-2 text-mainText">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
