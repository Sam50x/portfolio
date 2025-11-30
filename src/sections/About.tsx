import RowScrollContainer from "../components/RowScrollContainer"

const About = () => {
    return (
        <section id='about' className="w-full h-screen flex flex-col justify-start items-center pb-0.5">
            {/* Top Row */}
            <div className="w-full">
                <RowScrollContainer
                    background="dark"
                    mode={{
                        name: 'data',
                        data: ['Shaping the future', 'building cool shit', 'Gimme your money', 'letting them ideas out', 'just hanging around', 'having fun building this', 'not that much of fun actually']
                    }}

                />
            </div>

            {/* Content */}
            <div className="flex-1 h-full w-full">

            </div>

            {/* Bottom Row */}
            
        </section>
    )
}

export default About