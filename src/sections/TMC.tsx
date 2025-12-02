import { useEffect, useState } from 'react'
import PrevandNextBtns from '../components/PrevandNextBtns'
import { designs } from '../data'
import { motion } from 'framer-motion'

const TMC = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [isAnimating, setIsAnimating] = useState<boolean>(false)

    const handleGetNext = () => {
        if (currentIndex === designs.length - 1 || isAnimating) return
        setIsAnimating(true)
        setCurrentIndex(prev => prev + 1)
        setTimeout(() => setIsAnimating(false), 1000)
    }

    const handleGetPrev = () => {
        if (currentIndex === 0 || isAnimating) return
        setIsAnimating(true)
        setCurrentIndex(prev => prev - 1)
        setTimeout(() => setIsAnimating(false), 1000)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                setCurrentIndex(prev => {
                    if (prev === designs.length - 1) return 0
                    setIsAnimating(true)
                    setTimeout(() => setIsAnimating(false), 1000)
                    return prev + 1
                })
            }
        }, 10000)

        return () => clearInterval(interval)
    }, [isAnimating])

    return (
        <section id='tmc' className="w-full h-screen flex flex-col lg:flex-row justify-between items-start gap-2 lg:gap-8 py-4 md:py-8 lg:py-12">
            <div className="flex flex-col justify-start items-start w-full gap-2 lg:py-16">
                <h1 className="text-text text-3xl w-full text-center lg:text-start">Project TMC</h1>
                <p className="text-text text-xs lg:text-sm w-full text-start">I have been in a phase where I felt that my life ain't worth the trouble, seen people living their best, but I was stuck, leaving my life to be controlled by circumstances that I can't control. That's when I made a move, what if these circumstances didn't drive where I want? what if I actually can change something in my life? that's when I knew that my life is really worth the trouble, I started planning what I want to be, how I want to live, piece by piece; came project TMC, and the idea within it is that I will be doing all my best to be The Main Character in my life.</p>
            </div>
            <div className="flex flex-col justify-start items-center w-full gap-4">
                <h2 className="text-text">Hall of Fame</h2>
                <div
                    className='w-86 md:w-92 lg:w-100 aspect-945/755'
                >
                    <motion.img src={designs[currentIndex]} alt='TMC design'
                        className='w-full object-cover transition-all duration-300'
                        key={currentIndex}
                        animate={{ opacity: [0, 100] }}
                        transition={{ duration: 2 }}
                    />
                </div>
                <PrevandNextBtns
                    nextAction={handleGetNext}
                    prevAction={handleGetPrev}
                />
            </div>
        </section>
    )
}

export default TMC