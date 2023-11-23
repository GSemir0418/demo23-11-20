import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { Menu } from './Menu'
import { routes } from '@/router/router'

interface Props {}
export const Sider: React.FC<Props> = () => {
  const [fold, setFold] = useState(false)
  const toggleFold = () => {
    setFold(!fold)
  }
  return (
    <div className={`bg-siderBg text-siderText shadow-[#707070] transition-all duration-300 ease-in-out ${fold ? 'w-44' : 'w-12'} h-full max-h-screen -mb-28 overflow-y-scroll p-2 relative`}>
      <Menu routes={routes[0].children} fold={fold} />
      <div onClick={toggleFold} className="absolute bottom-1">
        {fold
          ? <FaAngleLeft size="1.5rem" fill="#707070" />
          : <FaAngleRight size="1.5rem" fill="#707070" />}
      </div>
    </div>
  )
}
