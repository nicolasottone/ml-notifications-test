'use client'

import { useState } from 'react'

export default function Home() {
  const [data, setData] = useState('Apretar GET')
  const [jsonInput, setJsonInput] = useState('')

  const sendNotificationTest = async (jsonInput: string) => {
    const res = await fetch('api/notifications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonInput
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendNotificationTest(jsonInput)
  }

  return (
    //make the textarea 6 rows high
    <main className="flex min-h-screen gap-4 flex-col items-center p-24">
      <form className="flex w-full flex-col gap-4 font-mono lg:flex" onSubmit={handleFormSubmit}>
        <button className="border" type="submit">
          SEND NOTIFICATION TEST
        </button>
        <textarea rows={6} className="p-2" value={jsonInput} onChange={(e) => setJsonInput(e.target.value)} />
      </form>
      <div className="max-w-5xl w-full flex-col gap-4 font-mono lg:flex">
        <button className="border" onClick={getLastNotification}>
          GET LAST NOTIFICATION
        </button>
        <p>{data}</p>
      </div>
    </main>
  )
}
