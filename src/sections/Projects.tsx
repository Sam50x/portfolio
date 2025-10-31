import clsx from 'clsx'
import { useState } from 'react'

import nextArrow from '../assets/icons/nextArrow.svg'
import prevArrow from '../assets/icons/prevArrow.svg'

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const handleGetNext = () => {
        if (currentIndex === 5) return
        setCurrentIndex(prev => prev + 1)
    }

    const handleGetPrev = () => {
        if (currentIndex === 0) return
        setCurrentIndex(prev => prev - 1)
    }

    return (
        <section className="w-full min-h-screen flex flex-col justify-start items-center">
            <h4 className="mt-8 text-text text-md">Projects</h4>
            <div id="cards" className="w-full flex justify-center items-center flex-1">
                {currentIndex > 0 &&
                    <div id='prev' className={clsx("bg-cards-dark-inactive h-106 w-70 scale-50 rounded-xl transition-all duration-500 -rotate-10 absolute z-1 -translate-y-40 -translate-x-30 md:scale-70 md:translate-y-0 md:-translate-x-50 lg:rotate-0 lg:-translate-x-75 lg:scale-80"
                    )}>
                        <p className='text-text'>{currentIndex - 1}</p>
                    </div>
                }
                {currentIndex >= 0 && currentIndex <= 5 &&
                    <div id="current" className={clsx("bg-cards-dark h-106 w-70 scale-90 md:scale-100 lg:scale-110 rounded-xl hover:border-text hover:border transition-all duration-500 z-2"
                    )}>
                        <p className='text-text'>{currentIndex}</p>
                    </div>
                }
                {currentIndex < 5 &&
                    <div id='next' className={clsx("bg-cards-dark-inactive h-106 w-70 scale-50 rounded-xl transition-all duration-500 rotate-10 absolute z-1 -translate-y-40 translate-x-30 md:scale-70 md:translate-y-0 md:translate-x-50 lg:rotate-0 lg:translate-x-75 lg:scale-80"
                    )}>
                        <p className='text-text'>{currentIndex + 1}</p>
                    </div>
                }
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