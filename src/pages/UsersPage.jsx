import React from 'react'
import Header from '../component/common/Header'
import UserTable from '../component/UserData/UserTable'
import { PiUserSwitchDuotone } from 'react-icons/pi';
import Card from '../component/common/Card';
import { FaUserCheck, FaUserPlus } from 'react-icons/fa';
import { FiUserX } from 'react-icons/fi';
import UserGrowth from '../component/UserData/UserGrowth'
import UserActivitymap from '../component/UserData/UserActivitymap'
import UserDemographics from '../component/UserData/UserDemographics'


const userCards = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

export default function UsersPage() {
  return (
    <div className=' flex-1 overflow-auto relative z-10'>
      <Header title="User Pages" />
      {/* card  */}
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <div className='grid grid-cols-1 gap-5 sm:grid-clos-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Card name='Total Users' icon={PiUserSwitchDuotone} value={userCards.totalUsers.toLocaleString()} color='#6366F1' />
          <Card name='New Users Today' icon={FaUserPlus} value={userCards.newUsersToday} color='#10B981' />
          <Card name='Active Users' icon={FaUserCheck} value={userCards.activeUsers.toLocaleString()} color='#F59E0B' />
          <Card name='Churn Rate' icon={FiUserX} value={userCards.churnRate} color='#EF4444' />

        </div>

        <UserTable />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <UserGrowth />
          <UserActivitymap />
          <UserDemographics />
        </div>
      </main>
    </div>
  )
}
