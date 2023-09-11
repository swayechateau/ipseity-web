import { ITranslatedProject } from '../../interfaces'
import ProjectCard from './ProjectCard'

interface IFeaturedProjects {
    projects: ITranslatedProject[]
}

function ProjectsFeatured({ projects }: IFeaturedProjects) {
    return (
        <div className='relative flex flex-col p-4 overflow-x-hidden'>
            <h1> Featured Projects </h1>
            <div className='grid grid-cols-1 gap-4 px-4 md:grid-cols-2'>
                {projects.map(project => (
                    <div key={project.name}>
                    <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsFeatured