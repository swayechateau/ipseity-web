import { langs } from '../../state'
import { ITranslatedPage, ITranslatedProject } from '../../interfaces';
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Hero/Banner";
import Navigation from "../../components/Navigation/Navigation";


export interface IProjectScreen {
  language: string, 
  page: ITranslatedPage,
  projects: ITranslatedProject[],
  setLanguage(l:string): void
}

function ProjectsScreen({page, projects, language, setLanguage}:IProjectScreen) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#111]">
      <Navigation mobileYAxis={0} desktopYAxis={30} onSwitch={setLanguage} language={language} languages={langs}/>
      <Banner
        large={false}
        hero={page.hero}
        title={page.title}
        subtitle={page.sub_title}
        />
      <main className="grow">
        <ProjectsList projects={projects}/>
      </main>
      <Footer />  
    </div>
  );
}

export default ProjectsScreen;
