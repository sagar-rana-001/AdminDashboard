import React from 'react'
import Header from '../component/common/Header' 
import DangerZone from '../component/userSetting/DangerZone'
import Profile from '../component/userSetting/Profile'
import Notifications from "../component/userSetting/Notifications"
import Security from '../component/userSetting/Security'
import ConnectedAccounts from '../component/userSetting/connectedAccount'


export default function SettingsPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title='Settings' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
      <Profile />
      <Notifications />
      <Security />
      <ConnectedAccounts />
      <DangerZone />
    </main>
  </div>
  )
}
