import React, { useState } from 'react'
import SettingSection from './SettingSection'
import { BiBell } from 'react-icons/bi'
import ToggleSwitch from './ToggleSwitch';

export default function Notifications() {

     const [notifications, setNotifications] = useState({
      push: true,
      email: false,
      sms: true,
    });
  return (
    <SettingSection icon={BiBell} title={"Notification"}>
      <ToggleSwitch
      label={"Push Notifications"}
      isOn={notifications.push}
      onToggle={() => setNotifications({ ...notifications, push: !notifications.push })}     />

      <ToggleSwitch
      label={"Email Notifications"}
      isOn={notifications.email}
      onToggle={() => setNotifications({ ...notifications, email: !notifications.email })}     />

      <ToggleSwitch
     label={"SMS Notifications"}
     isOn={notifications.sms}
     onToggle={() => setNotifications({ ...notifications, sms: !notifications.sms })}    />

    

    </SettingSection>
  )
}
