'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface InputDialogProps {
  onSubmit: (text: string) => void
}

export default function InputDialog({ onSubmit }: InputDialogProps) {
  const [inputText, setInputText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputText.trim()) {
      onSubmit(inputText)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl backdrop-blur-sm bg-opacity-90"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">输入要背诵的文本</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full h-40 p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="在这里输入文本..."
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
          type="submit"
        >
          开始背诵
        </motion.button>
      </form>
    </motion.div>
  )
}

