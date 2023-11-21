import React from 'react'
import { HorizontalMenu } from './HorizontalMenu'

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
  return (
    <div className=" bg-red-200 w-full h-20 flex-shrink-0 flex">
      <div className=" text-2xl w-40 flex-shrink-0">APS-Web</div>
      <div className=" flex-1">
        <HorizontalMenu routes={FAKE_ROUTES} />
      </div>
      <div className=" bg-green-300 w-40 flex-shrink-0">主题切换区</div>
    </div>
  )
}
