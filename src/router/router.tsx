import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/layout/Layout'

export const routes = [
  {
    path: '/',
    label: '/',
    element: <Layout />,
    children: [
      {
        path: 'setting',
        label: '设置',
        children: [
          { path: 'setting-sub1', label: '基础定义', element: <div>setting-sub1</div> },
          { path: 'setting-sub2', label: '基础编码', element: <>setting-sub2</> },
          { path: 'setting-sub3', label: '周期定义', element: <>setting-sub3</> },
          { path: 'setting-sub4', label: '物料互供', element: <>setting-sub4</> },
          { path: 'setting-sub5', label: '物料库存', element: <>setting-sub5</> },
          { path: 'setting-sub6', label: '地点定义', element: <>setting-sub6</> },
        ],
      },
      {
        path: 'crude',
        label: '原油',
        children: [
          { path: 'crude-sub1', label: '模板管理', element: <>crude-sub1</> },
          { path: 'crude-sub2', label: '原油数据', element: <>crude-sub2</> },
          { path: 'crude-sub3', label: '原油数据库', element: <>crude-sub3</> },
          { path: 'crude-sub4', label: '原油价格计算', element: <>crude-sub4</> },
        ],
      },
      {
        path: 'process',
        label: '流程',
        children: [
          { path: 'process-sub1', label: '流程管理', element: <>process-sub1</> },
          { path: 'process-sub2', label: '流程模板', element: <>process-sub2</> },
          { path: 'process-sub3', label: '流程图', element: <>process-sub3</> },
          { path: 'process-sub4', label: '装置合并', element: <>process-sub4</> },
          { path: 'process-sub5', label: '性质初值', element: <>process-sub5</> },
        ],
      },
      {
        path: 'constraint',
        label: '约束',
        children: [
          { path: 'constraint-sub1', label: '供需约束', element: <>constraint-sub1</> },
          { path: 'constraint-sub2', label: '能力约束', element: <>constraint-sub2</> },
          { path: 'constraint-sub3', label: '流量约束', element: <>constraint-sub3</> },
          { path: 'constraint-sub4', label: '性质约束', element: <>constraint-sub4</> },
          { path: 'constraint-sub5', label: '比例约束', element: <>constraint-sub5</> },
          { path: 'constraint-sub6', label: '装置起停', element: <>constraint-sub6</> },
        ],
      },
      {
        path: 'calculate',
        label: '计算',
        children: [
          { path: 'calculate-sub1', label: '计划优化', element: <>calculate-sub1</> },
          { path: 'calculate-sub2', label: '多周期优化', element: <>calculate-sub2</> },
          { path: 'calculate-sub3', label: '计划模拟', element: <>calculate-sub3</> },
          { path: 'calculate-sub4', label: '算法设置', element: <>calculate-sub4</> },
          { path: 'calculate-sub5', label: '价格计算', element: <>calculate-sub5</> },
        ],
      },
      {
        path: 'case',
        label: '案例',
        children: [
          { path: 'case-sub1', label: '案例管理', element: <>case-sub1</> },
          { path: 'case-sub2', label: '案例对比', element: <>case-sub2</> },
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
    ],
  },
]

export const router = createBrowserRouter(routes)
