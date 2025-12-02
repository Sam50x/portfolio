const Nav = () => {
    return (
        <nav className="w-full flex flex-row justify-between items-start py-6">
            <div className="flex flex-1 flex-col md:flex-row justify-between items-center gap-2">
                <div className="flex justify-between w-full md:w-fit items-center min-w-fit">
                    <a href="#hero" className="text-text text-4xl">Seif Adin</a>
                    <div className="w-full max-w-35 md:hidden">
                        <a href='mailto:seifadinmadkour@gmail.com'
                            className="bg-secondary w-full text-text flex justify-center items-center text-[16px] rounded-md py-1 px-4 transition duration-300 hover:-translate-y-0.5"
                            target="_blank" rel="noopener noreferrer">Contact me</a>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-start md:justify-center md:py-2 items-center gap-4">
                    <a href="#projects" className="text-text hover:opacity-85 transition-all duration-300">Projects</a>
                    <a href="#experience" className="text-text hover:opacity-85 transition-all duration-300">Experience</a>
                    <a href="#skills" className="text-text hover:opacity-85 transition-all duration-300">Skills</a>
                    <a href="#tmc" className="text-text hover:opacity-85 transition-all duration-300">TMC</a>
                </div>
                <div className="w-full max-w-35 hidden md:block">
                    <a href='mailto:seifadinmadkour@gmail.com'
                        className="bg-secondary w-full text-text flex justify-center items-center text-[16px] rounded-md py-1 px-4 transition duration-300 hover:-translate-y-0.5"
                        target="_blank" rel="noopener noreferrer">Contact me</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav