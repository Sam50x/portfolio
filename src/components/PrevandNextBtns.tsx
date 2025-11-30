import nextArrow from '../assets/icons/nextArrow.svg'
import prevArrow from '../assets/icons/prevArrow.svg'

type props = {
    prevAction: () => void,
    nextAction: () => void,
}

const PrevandNextBtns = ({ prevAction, nextAction }: props) => {
    return (
        <div className='mb-8 flex flex-row justify-center items-center'>
            <button
                onClick={prevAction}
                className='cursor-pointer'
            >
                <img src={prevArrow} alt="previous arrow" />
            </button>
            <button
                onClick={nextAction}
                className='cursor-pointer'
            >
                <img src={nextArrow} alt="next arrow" />
            </button>
        </div>
    )
}

export default PrevandNextBtns