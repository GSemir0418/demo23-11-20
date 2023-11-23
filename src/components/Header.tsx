import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6'
import { HorizontalMenu } from './HorizontalMenu'
import { useThemeStore } from '@/store/useThemeStore'

const FAKE_ROUTES = [
  {
    path: 'setting',
    label: '设置',
    children: [
      { path: 'setting-sub1', label: '基础定义' },
      { path: 'setting-sub2', label: '基础编码' },
      { path: 'setting-sub3', label: '周期定义' },
      { path: 'setting-sub4', label: '物料互供' },
    ],
  },
  {
    path: 'crude',
    label: '原油',
    children: [
      { path: 'crude-sub1', label: '模板管理' },
      { path: 'crude-sub2', label: '原油数据' },
      { path: 'crude-sub3', label: '原油数据库' },
      { path: 'crude-sub4', label: '原油价格计算' },
    ],
  },
  {
    path: 'process',
    label: '流程',
    children: [
      { path: 'process-sub1', label: '流程管理' },
      { path: 'process-sub2', label: '流程模板' },
      { path: 'process-sub3', label: '流程图' },
    ],
  },
  {
    path: 'constraint',
    label: '约束',
    children: [
      { path: 'constraint-sub1', label: '供需约束' },
      { path: 'constraint-sub2', label: '能力约束' },
      { path: 'constraint-sub3', label: '流量约束' },
    ],
  },
  {
    path: 'calculate',
    label: '计算',
    children: [
      { path: 'calculate-sub1', label: '计划优化' },
      { path: 'calculate-sub2', label: '多周期优化' },
      { path: 'calculate-sub3', label: '计划模拟' },
    ],
  },
  {
    path: 'case',
    label: '案例',
    children: [
      { path: 'case-sub1', label: '案例管理' },
      { path: 'case-sub2', label: '案例对比' },
    ],
  },
  {
    path: 'report',
    label: '报表',
    children: [
      { path: 'report-sub1', label: '标准报表', element: <>report-sub1</> },
      { path: 'report-sub2', label: '周期报表', element: <>report-sub2</> },
    ],
  },
]

interface Props {}
export const Header: React.FC<Props> = () => {
  const { setTheme } = useThemeStore()
  const [fold, setFold] = useState(true)
  const toggleFold = () => {
    setFold(!fold)
  }
  return (
    <div className={`bg-headerBg transition-all duration-300 ease-in-out w-full h-${fold ? 12 : 28} flex-shrink-0 flex shadow-black shadow-md z-10 rounded-xl relative`}>
      <div className="text-headerText text-4xl w-44 flex-shrink-0 font-bold flex items-center justify-center">
        A P S
        <span className="text-sm translate-y-2 pl-2"> WEB</span>
      </div>
      <div className="flex-1 flex flex-col">
        <HorizontalMenu routes={FAKE_ROUTES} fold={fold} unfold={() => { setFold(false) }} />
      </div>
      <div className="w-40 flex-shrink-0 flex justify-center items-center">
        <div className="h-5 w-5 rounded-full bg-slate-50 mr-7" onClick={() => { setTheme('light') }} />
        <div className="h-5 w-5 rounded-full bg-slate-500 mr-7" onClick={() => { setTheme('dark') }} />
        <div className="h-5 w-5 rounded-full bg-[#d8d1c5] mr-7" onClick={() => { setTheme('warm') }} />
      </div>
      <div className="absolute right-1 bottom-1 cursor-pointer" onClick={toggleFold}>
        {fold
          ? <FaAngleDown size="1.5rem" fill="#707070" />
          : <FaAngleUp size="1.5rem" fill="#707070" />}
      </div>
    </div>
  )
}
