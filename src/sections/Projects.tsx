import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import nextArrow from '../assets/icons/nextArrow.svg'
import prevArrow from '../assets/icons/prevArrow.svg'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

type Position = 'none' | 'beforePrev' | 'prev' | 'current' | 'next' | 'afterNext'

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [isAnimating, setIsAnimating] = useState<boolean>(false)
    const [isHovering, setIsHovering] = useState<boolean>(false)

    const handleGetNext = () => {
        if (currentIndex === projects.length - 1 || isAnimating) return
        setIsAnimating(true)
        setCurrentIndex(prev => prev + 1)
        setTimeout(() => setIsAnimating(false), 500)
    }

    const handleGetPrev = () => {
        if (currentIndex === 0 || isAnimating) return
        setIsAnimating(true)
        setCurrentIndex(prev => prev - 1)
        setTimeout(() => setIsAnimating(false), 500)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating && !isHovering) {
                setCurrentIndex(prev => {
                    if (prev === projects.length - 1) return 0
                    setIsAnimating(true)
                    setTimeout(() => setIsAnimating(false), 500)
                    return prev + 1
                })
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [isAnimating, isHovering])

    const positions = {
        none: 'w-0 h-0 hidden',
        beforePrev: 'bg-cards-dark-inactive scale-50 -rotate-10 z-0 -translate-y-40 -translate-x-3000 md:scale-70 md:translate-y-0 lg:rotate-0 lg:scale-80 opacity-0 h-0 w-none',
        prev: 'bg-cards-dark-inactive scale-50 -rotate-10 z-1 -translate-y-40 -translate-x-30 md:scale-70 md:translate-y-0 md:-translate-x-50 lg:rotate-0 lg:-translate-x-75 lg:scale-80 h-106 w-70',
        current: 'bg-cards-dark lg:scale-110 z-2 h-106 w-70',
        next: 'bg-cards-dark-inactive scale-50 rotate-10 z-1 -translate-y-40 translate-x-30 md:scale-70 md:translate-y-0 md:translate-x-50 lg:rotate-0 lg:translate-x-75 lg:scale-80 h-106 w-70',
        afterNext: 'bg-cards-dark-inactive scale-50 rotate-10 z-0 -translate-y-40 translate-x-3000 md:scale-70 md:translate-y-0 lg:rotate-0 lg:scale-80 opacity-0 h-0 w-none',
    }

    return (
        <section className="w-full min-h-screen flex flex-col justify-start items-center">
            <h4 className="mt-8 text-text text-md">Projects</h4>
            <div id="cards" className="w-full flex justify-center items-center flex-1 overflow-hidden relative">
                <AnimatePresence>
                    {projects.map((card, i) => {
                        if (i < 0 || i > 5) return null;
                        let pos: Position = 'none'

                        if (i == currentIndex) pos = 'current'
                        if (i == currentIndex - 1) pos = 'prev'
                        if (i == currentIndex + 1) pos = 'next'
                        if (i == currentIndex - 2) pos = 'beforePrev'
                        if (i == currentIndex + 2) pos = 'afterNext'

                        return (
                            <motion.div
                                key={i}
                                layout
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className={clsx(
                                    'absolute transition-all duration-500 rounded-xl flex',
                                    positions[pos]
                                )}
                                onMouseOver={() => setIsHovering(true)}
                                onMouseOut={() => setIsHovering(false)}
                            >
                                <div className={clsx('w-18 h-18 rounded-full absolute left-1/2 -translate-x-1/2 -top-8 bg-background border-4 flex justify-center items-center',
                                    pos === 'current' && 'border-cards-dark',
                                    pos !== 'current' && 'border-cards-dark-inactive'
                                )}>
                                    <div className='p-4'>
                                        {card.icon}
                                    </div>
                                </div>
                                <ProjectCard
                                    title={card.title}
                                />
                            </motion.div>
                        )
                    })
                    }
                </AnimatePresence>
            </div>
            <div className='mb-8 flex flex-row justify-center items-center'>
                <button
                    onClick={handleGetPrev}
                    className='cursor-pointer'
                >
                    <img src={prevArrow} alt="previous arrow" />
                </button>
                <button
                    onClick={handleGetNext}
                    className='cursor-pointer'
                >
                    <img src={nextArrow} alt="next arrow" />
                </button>
            </div>
        </section>
    )
}

export default Projects