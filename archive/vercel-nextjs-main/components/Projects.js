import React from 'react';
import ProjectCard from './ProjectCard';
const projects = [
  {
    hero: 'https://file.swayechateau.com/view/swayechateauWLGYnBgsrYxGZSputQx822',
    title: 'The Coldest Sunset',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: ['photography', 'travel', 'winter'],
    open_source: true,
    git_repo: 'https://github.com/swayechateau/fileserver',
    live_url: 'https://file.swayechateau.com',
    case_study: 'https://blog.swayechateau.com/post/building-a-file-server-api',
  },
  {
    hero: 'https://file.swayechateau.com/view/globaliyndTnSCK14onpASVq7n5?share_code=s5LUL0lAdDLS',
    title: 'File Server',
    excerpt: 'Custom built CDN for my media files.',
    tags: ['markdown', 'lumen', 'microservice', 'mariadb', 'api'],
    open_source: true,
    git_repo: 'https://github.com/swayechateau/fileserver',
    live_url: 'https://file.swayechateau.com',
    case_study: 'https://blog.swayechateau.com/post/building-a-file-server-api',
  },
  {
    hero: 'https://file.swayechateau.com/view/globalMaJKf2UDzFdqba7hG96U6?share_code=s6LHjQlIsFHc',
    title: 'Web Meta Grabber',
    excerpt:
      'I Wanted an api I had permissions to use to get the meta data from websites for a chat application I was building.',
    tags: ['markdown', 'lumen', 'microservice', 'php', 'api'],
    open_source: true,
    git_repo: 'https://github.com/swayechateau/web-meta-grabber',
    live_url: 'https://meta.swayechateau.com/',
    case_study: 'https://blog.swayechateau.com/posts/web-meta-grabber',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 pb-8">
      <div className="mx-5 -mt-32 rounded-2xl bg-[rgba(0,0,0,.5)] p-10 text-gray-200 backdrop-blur-sm md:mx-20">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-100 md:text-6xl">
            Featured Projects
          </h1>
          <p className="my-4 text-xl">
            Here are some of the projects I have worked on.
          </p>
        </div>
        {/* Project Showcase */}
        <div
          id="projects-showcase"
          className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
