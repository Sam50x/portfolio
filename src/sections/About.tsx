import RowScrollContainer from "../components/RowScrollContainer"

import Image1 from '../assets/images/image-1.jpg'
import Image2 from '../assets/images/image-2.jpeg'
import Image3 from '../assets/images/image-3.jpg'

const About = () => {

    const aboutData = ['Shaping the future', 'building cool shit', 'Gimme your money', 'letting them ideas out', 'seif is the name', 'having fun building this', 'not that much of fun actually', 'achieving my goals', 'trying the impossible', 'are really watching this right now?', 'don\'t you have something better to do?', 'like calling me for example']

    return (
        <section id='about' className="w-full h-screen min-h-[700px] flex flex-col justify-start items-center pb-0.5">
            {/* Top Row */}
                <RowScrollContainer
                    data={aboutData}
                />

            {/* Content */}
            <div className="h-full w-full flex justify-between items-start flex-col md:py-12 sm:py-8 py-4 px-8">
                {/* Images */}
                <div className="flex flex-row justify-center items-center flex-nowrap gap-6 overflow-hidden w-full">
                    <img
                        src={Image1}
                        alt="image 1"
                        className="w-full max-w-64 xl:max-w-70 aspect-square rounded-xl border border-text text-text object-cover"
                    />
                    <img
                        src={Image2}
                        alt="image 2"
                        className="w-full max-w-64 xl:max-w-70 aspect-square rounded-xl border border-text text-text object-cover hidden sm:block"
                    />
                    <img
                        src={Image3}
                        alt="image 3"
                        className="w-full max-w-64 xl:max-w-70 aspect-square rounded-xl border border-text text-text object-cover hidden lg:block"
                    />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-start items-center w-full gap-4 mt-12 mb-auto">
                    <h2 className="text-text text-4xl">Taking the industry for granted</h2>
                    <p className="text-text whitespace-pre-line w-full max-w-120">
                        {`I just believe that with enough focus and discipline, you can reach wherever you want — and beyond.
                        Working hard isn't optional; it's how I'm earning what I want.`}
                    </p>
                </div>
            </div>

            {/* Bottom Row */}
                <RowScrollContainer
                    data={aboutData}
                />
        </section>
    )
}

export default About