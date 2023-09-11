import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { IStateLanguage } from '../../interfaces';
interface INavigation {
    language: string, 
    onSwitch(language:string):void, 
    languages: IStateLanguage[], 
    mobileYAxis:number, 
    desktopYAxis:number
}
function Navigation({language, onSwitch, languages, mobileYAxis, desktopYAxis}: INavigation) {
    return (
        <div className='nav'>
            <LanguageSwitcher show={false} absolute current={language} langs={languages} onSwitch={onSwitch}/>
            <MobileNav yAxis={mobileYAxis} language={language}/>
            <DesktopNav yAxis={desktopYAxis} language={language} onSwitch={onSwitch}/>
        </div>
    )
}

export default Navigation