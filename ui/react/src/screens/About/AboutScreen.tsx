import Navigation from "../../components/Navigation/Navigation"
import Banner from '../../Banner'
import Footer from '../../components/Footer/Footer'

function AboutScreen({page, language, setLanguage}) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#111]">
       <Navigation mobileYAxis={30} desktopYAxis={40} onSwitch={setLanguage} language={language} languages={langs}/>
      <Banner 
        hero={page.hero}
        title={page.title}
        subtitle={page.sub_title}
        />
      <main className="grow">

      </main>
      <Footer />  
    </div>
  );
}

export default AboutScreen;
