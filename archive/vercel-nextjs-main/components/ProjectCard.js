import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {

  return (
    <div className="overflow-hidden rounded shadow-lg md:col-span-2 xl:col-span-1">
      <Image layout="responsive" height="300" width="500" src={project.hero} alt={project.title} />
      {/* Project Title and Excerpt */}
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{ProjectCard.title}</div>
        <p className="text-base text-gray-400">{project.excerpt}</p>
      </div>
      {/* Project Tags */}
      <div className="px-6 pt-4 pb-2">
        {project.tags.map((tag) => (
          <span key={tag} className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #{tag}
          </span>
        ))}
      </div>
      {/* Project Action Buttons */}
      <div className="pt-4 pb-2 text-center">
        <Link href={project.live_url} target="_blank" passHref rel="noopener noreferrer">
          <a className="m-1 inline-block cursor-pointer rounded bg-[rgba(255,255,255,0.1)] py-2 px-4 uppercase backdrop-blur hover:bg-[rgba(255,255,255,0.2)]">
            View Demo
          </a>
        </Link>
        <Link href={project.git_repo} target="_blank" passHref rel="noopener noreferrer">
          <a className="m-1 inline-block cursor-pointer rounded bg-[rgba(255,255,255,0.1)] py-2 px-4 uppercase backdrop-blur hover:bg-[rgba(255,255,255,0.2)]">
            View Code
          </a>
        </Link>
        <Link href={project.case_study} target="_blank" passHref rel="noopener noreferrer">
          <a className="m-1 inline-block cursor-pointer rounded bg-[rgba(255,255,255,0.1)] py-2 px-4 uppercase backdrop-blur hover:bg-[rgba(255,255,255,0.2)]">
            View Case Study
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
