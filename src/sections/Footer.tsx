import GithubIcon from '../assets/icons/github.svg'
import LinkedinIcon from '../assets/icons/linkedin.svg'
import EmailIcon from '../assets/icons/email.svg'

const Footer = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center gap-2 py-8 px-8 bg-cards-dark-inactive mt-12 mb-4 rounded-xl">
            <h4 className="text-text text-center text-sm">That was Seif Adin in a nutshell</h4>
            <h4 className="text-text text-center text-sm">Did you like this? contact me to get your piece now!</h4>
            <div className="flex flex-row justify-center items-center gap-6 w-full mt-6">
                <a href="https://github.com/Sam50x" target="_blank" rel="noopener noreferrer"
                    className="hover:-translate-y-0.5 transition-all duration-300 h-10 w-10"
                >
                    <img src={GithubIcon} alt='github'
                        className="w-full h-full"
                    />
                </a>
                <a href="https://www.linkedin.com/in/seif-adin-madkour-0195662b5/" target="_blank" rel="noopener noreferrer"
                    className="hover:-translate-y-0.5 transition-all duration-300 h-10 w-10"
                >
                    <img src={LinkedinIcon} alt='linkedin'
                        className="w-full h-full"
                    />
                </a>
                <a href="mailto:seifadinmadkour@gmail.com" target="_blank" rel="noopener noreferrer"
                    className="hover:-translate-y-0.5 transition-all duration-300 h-10 w-10"
                >
                    <img src={EmailIcon} alt='email'
                        className="w-full h-full"
                    />
                </a>
            </div>
        </section>
    )
}

export default Footer