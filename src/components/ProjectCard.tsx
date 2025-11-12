import type { Project } from "../types"

const ProjectCard = ({ title }: Partial<Project>) => {
    return (
        <div className="w-full h-full text-text">
            {title}
        </div>
    )
}

export default ProjectCard