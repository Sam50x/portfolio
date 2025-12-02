import { motion } from 'framer-motion'
import { useLayoutEffect, useRef, useState } from "react"

type props = {
    data: string[]
}

const RowScrollContainer = ({ data }: props) => {

    const contentRef = useRef<HTMLDivElement>(null)

    const [lastWidth, setLastWidth] = useState<number>(0)
    const [shift, setShift] = useState<number>(0)
    const [motionKey, setMotionKey] = useState<number>(0)

    useLayoutEffect(() => {
        const calculateWidth = () => {

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
    }, [lastWidth])

    return (
        <div className="w-screen">
            <div
                className="w-full h-20 border-t-5 border-b-5 border-text bg-background">
                <motion.div
                    className="h-full flex flex-row justify-start items-center gap-16"
                    ref={contentRef}
                    key={motionKey}
                    initial={{ x: '100%' }}
                    animate={{ x: shift }}
                    transition={{ repeat: Infinity, duration: data.length * 5, delay: 2, ease: 'linear' }}
                >
                    {data.map((string, i) => {
                        return (
                            <h1 key={i} className="whitespace-nowrap text-[22px] lowercase text-text">
                                {string}</h1>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default RowScrollContainer