import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import DashboardCard from './DashboardCard'

const Dashboard = () => {

  return (
    <div className='flex flex-col lg:flex-row '>
    <div className='w-[20%] hidden p-2 px-4 lg:block m-auto '>
      <Sidebar />
    </div>
    <div className='border-2  p-4 px-4 border-red-600 w-[100%] lg:w-[80%] m-auto bg-[#FFF9F1]'>
       <DashboardCard/>
    </div>
  </div>
  )
}

export default Dashboard
