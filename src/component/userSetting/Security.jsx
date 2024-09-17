import React, { useState } from 'react'
import SettingSection from './SettingSection'
import { BiLock } from 'react-icons/bi'
import ToggleSwitch from './ToggleSwitch'

export default function Security() {
  const [twoFactor, setTwoFactor] = useState(false);
  return (
    <SettingSection icon={BiLock} title={"Security"}>
      <ToggleSwitch
        label={"Two-Factor Authentication"}
        isOn={twoFactor}
        onToggle={() => setTwoFactor(!twoFactor)}
      />
      <div className='mt-4'>
        <button
          className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded 
        transition duration-200
        '
        >
          Change Password
        </button>
      </div>
    </SettingSection>
  )
}
