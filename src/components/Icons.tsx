import React from 'react'
import { TbBuildingFactory } from 'react-icons/tb'
import { GiChemicalTank } from 'react-icons/gi'
import { IoIosSwitch } from 'react-icons/io'
import { FaChartPie } from 'react-icons/fa'

interface Props {
  index: number
}
export const Icons: React.FC<Props> = ({ index }) => {
  const icons = [
    <TbBuildingFactory size="2.5rem" />,
    <GiChemicalTank size="2.5rem" />,
    <IoIosSwitch size="2.5rem" />,
    <FaChartPie size="2.5rem" />,
  ]
  return icons[index]
}
