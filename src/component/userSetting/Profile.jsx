import React from 'react'
import SettingSection from './SettingSection'
import { BiUser } from 'react-icons/bi'


export default function Profile() {
  return (
    <SettingSection icon={BiUser} title={"Profile"}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img src="https://randomuser.me/api/portraits/women/3.jpg"
          alt="hhh"
          className='rounded-full w-20 h-20  object-cover mr-4' />
        <div>
          <h3 className='text-lg font-semibold text-gray-100'>lucky Doe</h3>
          <p className='text-gray-400'>lucky.doe@example.com</p>
        </div>

      </div>
      <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
        Edit Profile
      </button>
    </SettingSection>
  )
}
