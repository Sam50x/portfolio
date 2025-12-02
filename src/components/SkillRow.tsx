import { motion } from 'framer-motion'
import { useLayoutEffect, useRef, useState } from "react"
import type { Skill } from '../types'

const SkillRow = ({ title, tools }: Skill) => {

    const contentRef = useRef<HTMLDivElement>(null)

    const [isHovering, setIsHovering] = useState<boolean>(false)

    const [lastWidth, setLastWidth] = useState<number>(0)
    const [shift, setShift] = useState<number>(0)
    const [motionKey, setMotionKey] = useState<number>(0)

    useLayoutEffect(() => {
        const calculateWidth = () => {

            if (!isHovering){
                return
            }

            if (window.innerWidth == lastWidth) {
                return
            }

            setLastWidth(window.innerWidth)

            if (contentRef.current) {
                const contentWidth = contentRef.current.scrollWidth

                const finalX = 0 - (contentWidth * 1.2)

                setShift(finalX | 0)
                setMotionKey(prev => prev + 1)
            }
        }

        calculateWidth()

        window.addEventListener('resize', calculateWidth)
        return () => window.removeEventListener('resize', calculateWidth)
    }, [lastWidth, isHovering])

    const handleHoverStart = () => {
        setIsHovering(true)
    }

    const handleHoverEnd = () => {
        setIsHovering(false)
    }

    return (
        <div
            className="w-screen"
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
        >
            <div
                className={`w-full h-16 border-t-5 border-text ${isHovering ? 'bg-text' : 'bg-background'}`}>
                {isHovering ? (
                    <motion.div
                        className="h-full flex flex-row justify-start items-center gap-16"
                        ref={contentRef}
                        key={motionKey}
                        initial={{ x: '100%' }}
                        animate={{ x: shift }}
                        transition={{ repeat: Infinity, duration: tools.length * 5, delay: 0, ease: 'linear' }}
                    >
                        {tools.map((string, i) => {
                            return (
                                <h1 key={i} className="whitespace-nowrap text-[22px] lowercase text-background">
                                    {string}</h1>
                            )
                        })}
                    </motion.div>
                ) : (
                    <h1 className='text-text text-[22px] w-full text-center h-full flex justify-center items-center'>{title}</h1>
                )}
            </div>
        </div>
    )
}

export default SkillRow