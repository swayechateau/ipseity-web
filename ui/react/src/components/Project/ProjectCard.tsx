import { ITranslatedProject } from "../../interfaces"
export interface IProjectCard {
    project: ITranslatedProject
}

function ProjectCard({ project }: IProjectCard) {
    return (
        <div className='bg-[rgba(255,255,255,0.05)] text-white my-3 w-full rounded-2xl overflow-hidden backdrop-blur transition-all ease-out hover:ease-out hover:transition-all hover:rounded md:grayscale md:hover:grayscale-0'>
            <a href='#case-study'>
                <div className='relative h-80'>
                    <img className='w-full h-full transition-all ease-out filter' src={project.hero} />
                    <div className='absolute top-0 left-0 right-0 text-white py-2 px-4 bg-[rgba(0,0,0,0.4)] backdrop-blur-sm'>
                        <h3 className="text-2xl font-bold capitalize">{project.name}</h3>
                        <p className="text-xl">{project.description}</p>
                    </div>
                </div>
            </a>
            <div className='p-2 text-center'>
                {project.git_url && <a className='inline-block py-2 px-4 m-1 rounded cursor-pointer uppercase bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] backdrop-blur' href={project.git_url}>View Code</a>}
                {project.demo_url && <a className='inline-block py-2 px-4 m-1 rounded cursor-pointer uppercase bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] backdrop-blur' href={project.demo_url} target="_blank">View Demo</a>}
                <a className='inline-block py-2 px-4 m-1 rounded cursor-pointer uppercase bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] backdrop-blur' href=''>Case Study</a>
            </div>
        </div>
    )
}

export default ProjectCard