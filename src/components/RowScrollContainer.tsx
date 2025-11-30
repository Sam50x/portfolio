import clsx from "clsx"
import { motion } from 'framer-motion'

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

    return (
        <div className={clsx("w-full h-20 border-t-5 border-b-5 border-text",
            background === 'dark' ? 'bg-background' : 'bg-text'
        )}>
            {name === 'data' ? (
                <motion.div className="h-full flex flex-row justify-start items-center gap-16 px-3"
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