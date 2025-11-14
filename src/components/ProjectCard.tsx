import clsx from "clsx"
import type { Project } from "../types"

const ProjectCard = ({ title, description, live_demo_link, github_link, date }: Partial<Project>) => {
    return (
        <div className="w-full h-full text-text whitespace-pre-line px-8">
            <div className="mt-18 flex flex-col w-full">
                <h1 className="text-text text-[22px]">
                    {title}
                </h1>
                <h1 className="text-text opacity-80 text-[12px]">
                    {date}
                </h1>
            </div>
            <div className="mt-8 flex-1 h-63">
                <p className="text-text text-[13.5px]">
                    {description}
                </p>
            </div>
            <div className="flex justify-between items-center mt-6">
                <a href={live_demo_link}
                    className={clsx("bg-secondary w-9/20 flex justify-center items-center text-[16px] rounded-md py-1 transition duration-300 hover:-translate-y-0.5",
                        !live_demo_link && 'opacity-50 hover:translate-y-0'
                    )}
                    target="_blank" rel="noopener noreferrer">Demo</a>
                <a href={github_link}
                    className={clsx("border-3 border-secondary border-inside w-9/20 flex justify-center items-center text-[16px]  rounded-md py-0.5 transition duration-300 hover:-translate-y-0.5",
                        !github_link && 'opacity-50 hover:translate-y-0'
                    )}
                    target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        </div>
    )
}

export default ProjectCard