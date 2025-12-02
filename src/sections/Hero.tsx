import Nav from "../components/Nav"
import { motion } from 'framer-motion'

import GithubIcon from '../assets/icons/github.svg'
import LinkedinIcon from '../assets/icons/linkedin.svg'
import EmailIcon from '../assets/icons/email.svg'
import ScrollIcon from '../assets/icons/scroll.svg'

import HeroVideo from '../assets/videos/heroVideo.mp4'

const Hero = () => {
    return (
        <section id='hero' className="w-full h-screen flex flex-col justify-start items-center">
            {/* Nav */}
            <Nav />

            {/* Video */}
            <div className="w-full xl:px-25 lg:px-16 md:px-8 px-3 h-3/4 z-0 mt-32 absolute">
                <video
                    className="w-full h-full object-cover rounded-3xl"
                    src={HeroVideo}
                    autoPlay
                    loop
                    muted
                ></video>
            </div>

            {/* Content */}
            <div className="w-full xl:px-25 lg:px-16 md:px-8 px-3 h-3/4 z-10 mt-32 absolute flex flex-col justify-start items-center gap-2 py-24">
                <h1 className="text-text text-4xl sm:text-5xl md:text-7xl text-center">Seif Adin Madkour</h1>
                <p className="text-text text-xl sm:text-2xl text-center">a multi-disciplinary engineer</p>
                <div className="flex flex-row justify-center items-center gap-8 w-full mt-6">
                    <a href="https://github.com/Sam50x" target="_blank" rel="noopener noreferrer"
                        className="hover:-translate-y-0.5 transition-all duration-300 h-12 w-12"
                    >
                        <img src={GithubIcon} alt='github'
                            className="w-full h-full"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/seif-adin-madkour-0195662b5/" target="_blank" rel="noopener noreferrer"
                        className="hover:-translate-y-0.5 transition-all duration-300 h-12 w-12"
                    >
                        <img src={LinkedinIcon} alt='linkedin'
                            className="w-full h-full"
                        />
                    </a>
                    <a href="mailto:seifadinmadkour@gmail.com" target="_blank" rel="noopener noreferrer"
                        className="hover:-translate-y-0.5 transition-all duration-300 h-12 w-12"
                    >
                        <img src={EmailIcon} alt='email'
                            className="w-full h-full"
                        />
                    </a>
                </div>

                {/* Scroll */}
                <motion.a href="#about"
                    className="absolute w-full flex flex-col justify-center items-center gap-2"
                    initial={{ bottom: 20 }}
                    animate={{ bottom: 8 }}
                    transition={{ repeat: Infinity, repeatType: 'mirror', duration: 1 }}
                >
                    <p className="text-text text-xs md:text-sm">more about me</p>
                    <img src={ScrollIcon} alt="scroll"
                        className="w-7 md:w-8"
                    />
                </motion.a>
            </div>
        </section>
    )
}

export default Hero