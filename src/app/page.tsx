'use client'

import { useState } from 'react'

export default function Home() {
  const sendNotificationTest = async () => {
    const res = await fetch('api/notifications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _id: 'f9f08571-1f65-4c46-9e0a-c0f43faas1557e',
        resource: '/questions/5036111111',
        user_id: 123456789,
        topic: 'questions',
        application_id: 2069392825111111,
        attempts: 1,
        sent: '2017-10-09T13:51:05.464Z',
        received: '2017-10-09T13:51:05.438Z'
      })
    })
  }

  const getLastNotification = async () => {
    const res = await (
      await fetch('api/questions', {
        method: 'GET'
      })
    ).json()
    setData(JSON.stringify(res))
  }
  const [data, setData] = useState('Apretar GET')

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex gap-7 p-4">
        <button onClick={sendNotificationTest}>SEND NOTIFICATION TEST</button>
        <button onClick={getLastNotification}>GET LAST NOTIFICATION</button>
      </div>
      <div className="max-w-5xl w-full flex-col gap-4 font-mono lg:flex">
        <h2>ULTIMA NOTI RECIBIDA</h2>
        <p>{data}</p>
      </div>
    </main>
  )
}
