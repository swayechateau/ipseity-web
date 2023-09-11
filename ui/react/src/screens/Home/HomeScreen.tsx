
import { langs } from '../../state'
import { ITranslatedPage } from "../../interfaces"
import { projects, posts } from '../../state/translated'

import Banner from "../../components/Hero/Banner"
import FeaturedProjects from "../../components/Project/ProjectsFeatured"
import Footer from "../../components/Footer/Footer"
import RecentPosts from "../../components/Post/RecentPosts"
import RecentVideos from "../../components/Video/RecentVideos"
import Navigation from "../../components/Navigation/Navigation"
import AboutSnippet from '../../components/About/AboutSnippet'


export interface IHomeScreen {
  language: string, 
  page: ITranslatedPage,
  setLanguage(l:string): void
}

function HomeScreen({page, language, setLanguage}: IHomeScreen) {
  console.log(posts)
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#111]">
      <Navigation mobileYAxis={30} desktopYAxis={40} onSwitch={setLanguage} language={language} languages={langs}/>
      <Banner
          large 
          hero={page.hero}
          title={page.title}
          subtitle={page.sub_title}
        />
      <main className="grow">
         <FeaturedProjects projects={projects[language]} />
         <AboutSnippet />
         <RecentPosts posts={posts[language]} amount={4}/>
        <div className='p-4 m-4'>
          <RecentVideos />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomeScreen
