import { useState } from "react"
import SkillRow from "../components/SkillRow"
import { skills } from "../data"

const Skills = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const handleChangeIndex = (i: number) => {
        setActiveIndex(i)
    }

    const deactivateAnimation = () => {
        setActiveIndex(null)
    }

    const skillsRows = skills.map((skill, i) => {
        return (
            <SkillRow
                key={i}
                skill={skill}
                activeIndex={activeIndex}
                actualIndex={i}
                setActiveIndex={handleChangeIndex}
                deactivateAnimation={deactivateAnimation}
            />
        )
    })

    return (
        <section id='skills' className="w-full h-screen flex flex-col justify-start items-center pb-0.5"
            onDoubleClick={deactivateAnimation}
        >
            <h4 className="mt-8 text-text text-md">Skills</h4>
            <h1 className="mt-12 text-text text-2xl text-center">What are you looking for?</h1>
            <div className="flex-1 w-full pt-12 flex flex-col justify-end items-center gap-0">
                {skillsRows}
            </div>
            <div className="w-screen border-b-5 border-text"></div>
        </section>
    )
}

export default Skills