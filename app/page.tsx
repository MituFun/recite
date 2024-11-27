'use client'

import { useState } from 'react'
import InputDialog from './components/InputDialog'
import DisplayWindow from './components/DisplayWindow'
import Background from './components/Background'

export default function Home() {
  const [text, setText] = useState('')
  const [isDisplaying, setIsDisplaying] = useState(false)

  const handleTextSubmit = (submittedText: string) => {
    setText(submittedText)
    setIsDisplaying(true)
  }

  const handleReset = () => {
    setText('')
    setIsDisplaying(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden">
      <Background />
      {!isDisplaying ? (
        <InputDialog onSubmit={handleTextSubmit} />
      ) : (
        <DisplayWindow text={text} onReset={handleReset} />
      )}
    </main>
  )
}

