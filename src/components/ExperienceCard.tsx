import type { Experience } from "../types"

const ExperienceCard = ({ title, company, location, description, date }: Partial<Experience>) => {
    return (
        <div className="w-full h-full text-text whitespace-pre-line px-8">
            <div className="mt-18 flex flex-col w-full">
                <h1 className="text-text text-[22px]">
                    {title}
                </h1>
                <h1 className="text-text text-[16px] mt-1">
                    {company} -- ({location})
                </h1>
                <h1 className="text-text opacity-80 text-[12px]">
                    {date}
                </h1>
            </div>
            <div className="mt-4 flex-1 h-73">
                <p className="text-text text-[13.5px]">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ExperienceCard