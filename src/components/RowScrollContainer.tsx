import clsx from "clsx"
import { motion } from 'framer-motion'
import { useLayoutEffect, useRef, useState } from "react"

type props = {
    mode: {
        name: 'title' | 'data'
        data?: string[]
        title?: string
    }
    background: 'dark' | 'light'
}

const RowScrollContainer = ({ mode, background }: props) => {

    const {
        name,
        data,
        title
    } = mode ?? null

    const contentRef = useRef<HTMLDivElement>(null)

    const [lastWidth, setLastWidth] = useState<number>(0)
    const [shift, setShift] = useState<number>(0)
    const [motionKey, setMotionKey] = useState<number>(0)

    useLayoutEffect(() => {
        const calculateWidth = () => {

            if (window.innerWidth == lastWidth){
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
        <div
            className={clsx("w-full h-20 border-t-5 border-b-5 border-text",
                background === 'dark' ? 'bg-background' : 'bg-text'
            )}>
            {name === 'data' ? (
                <motion.div
                    className="h-full flex flex-row justify-start items-center gap-16"
                    ref={contentRef}
                    key={motionKey}
                    initial={{ x: '100%' }}
                    animate={{ x: shift }}
                    transition={{ repeat: Infinity, duration: data?.length ? data?.length * 5 : 40, delay: 2, ease: 'linear' }}
                >
                    {data && data.map((string, i) => {
                        return (
                            <h1 key={i} className="whitespace-nowrap text-[22px] text-text lowercase">{string}</h1>
                        )
                    })}
                </motion.div>
            ) : (
                <div className="flex justify-center items-center w-full h-full">
                    <h1 className="w-full text-center text-3xl text-text lowercase">{title && title}</h1>
                </div>
            )}

        </div>
    )
}

export default RowScrollContainer