import { useState } from 'react'
import D1 from '../assets/images/D1.png'
import PrevandNextBtns from '../components/PrevandNextBtns'

const TMC = () => {

    const [index, setIndex] = useState<number>(0)

    return (
        <section id='tmc' className="w-full h-screen flex flex-col lg:flex-row justify-between items-start gap-2 lg:gap-8 py-4 md:py-8 lg:py-12">
            <div className="flex flex-col justify-start items-start w-full gap-2 lg:py-16">
                <h1 className="text-text text-3xl w-full text-center lg:text-start">Project TMC</h1>
                <p className="text-text text-xs lg:text-sm w-full text-start">I have been in a phase where I felt that my life ain't worth the trouble, seen people living their best, but I was stuck, leaving my life to be controlled by circumstances that I can't control. That's when I made a move, what if these circumstances didn't drive where I want? what if I actually can change something in my life? that's when I knew that my life is really worth the trouble, I started planning what I want to be, how I want to live, piece by piece; came project TMC, and the idea within it is that I will be doing all my best to be The Main Character in my life.</p>
            </div>
            <div className="flex flex-col justify-start items-center w-full h-full gap-4">
                <h2 className="text-text">Hall of Fame</h2>
                <img src={D1} alt='d1'
                    className='w-86 md:w-92 lg:w-100 object-cover-500'
                />
                <PrevandNextBtns 
                    nextAction={() => {}}
                    prevAction={() => {}}
                />
            </div>
        </section>
    )
}

export default TMC