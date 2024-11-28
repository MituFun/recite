'use client'

import { useState, useEffect } from 'react'

interface DisplayWindowProps {
    text: string
    onReset: () => void
}

export default function DisplayWindow({ text, onReset }: DisplayWindowProps) {
    const [displayedText, setDisplayedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.code === 'Space' && !isComplete) {
                event.preventDefault()
                showNextCharacter()
            }
        }

        window.addEventListener('keydown', handleKeyPress)
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [currentIndex, isComplete, text])

    const showNextCharacter = () => {
        if (currentIndex < text.length - 1) {

            // while (nextIndex < text.length && (isPunctuation(text[nextIndex]) || text[nextIndex] === '\n')) {
            //   nextIndex++
            // }

            const nextIndex = currentIndex + 1
            setCurrentIndex(nextIndex)
            setDisplayedText(text.slice(0, nextIndex + 1))

            if (nextIndex >= text.length - 1) {
                setIsComplete(true)
            }
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl h-full flex flex-col justify-between overflow-hidden"
        >
            <div className="overflow-y-auto flex-grow pr-4 max-h-[calc(100vh-16rem)]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style jsx global>{`
          body {
            overflow: hidden;
          }
          .overflow-y-auto::-webkit-scrollbar {
            display: none;
          }
        `}</style>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">背诵文本</h2>
                <div className="text-lg text-gray-700 whitespace-pre-wrap">
                    {displayedText.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.5, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            </div>
            {isComplete ? (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 mt-4"
                    onClick={onReset}
                >
                    再来一段？
                </motion.button>
            ) : (
                <p className="text-gray-600 mt-4">
                    {currentIndex === -1 ? "按空格键开始" : "按空格键显示下一个字符"}
                </p>
            )}
        </motion.div>
    )
}

