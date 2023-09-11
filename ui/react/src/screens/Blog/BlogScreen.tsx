import './ProjectsScreen.css'
import Nav from '../../Nav'
import Banner from '../../Banner'
import Footer from '../../Footer'
import FeaturedProjects from '../../FeaturedProjects';
function BlogScreen({page, posts, routes}) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#111]">
      <Nav routes={routes} setLanguage={setLanguage}/>
      <Banner 
        hero={page.hero}
        title={page.title}
        subtitle={page.sub_title}
        />
      <main className="grow">
        <FeaturedProjects posts={posts}/>
      </main>
      <Footer />  
    </div>
  );
}

export default BlogScreen;
