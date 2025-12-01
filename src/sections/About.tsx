import RowScrollContainer from "../components/RowScrollContainer"

const About = () => {
    return (
        <section id='about' className="w-full h-screen flex flex-col justify-start items-center pb-0.5">
            {/* Top Row */}
            <div className="w-screen">
                <RowScrollContainer
                    background="dark"
                    mode={{
                        name: 'data',
                        data: ['Shaping the future', 'building cool shit', 'Gimme your money', 'letting them ideas out', 'seif is the name', 'having fun building this', 'not that much of fun actually', 'achieving my goals', 'trying the impossible', 'are really watching this right now?', 'don\'t you have something better to do?', 'like calling me right now']
                    }}
                />
            </div>

            {/* Content */}
            <div className="flex-1 h-full w-full">

            </div>

            {/* Bottom Row */}
            <div className="w-screen">
                <RowScrollContainer
                    background="dark"
                    mode={{
                        name: 'data',
                        data: ['Shaping the future', 'building cool shit', 'Gimme your money', 'letting them ideas out', 'seif is the name', 'having fun building this', 'not that much of fun actually', 'achieving my goals', 'trying the impossible', 'are really watching this right now?', 'don\'t you have something better to do?', 'like calling me for example']
                    }}
                />
            </div>
        </section>
    )
}

export default About