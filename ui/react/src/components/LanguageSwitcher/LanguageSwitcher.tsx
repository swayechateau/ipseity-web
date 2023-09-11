import { useState } from "react"
import { IStateLanguage } from "../../interfaces"

export interface ILanguageSwitcher {
    absolute: boolean,
    show: boolean,
    current: string,
    langs: IStateLanguage[],
    onSwitch(language: string): void
}

function LanguageSwitcher({absolute, show = false, current, langs, onSwitch}: ILanguageSwitcher) {
    const [lang, setLang] = useState(current)
    const changeLang = (l: string) => {
        setLang(l)
        if(onSwitch) {
            onSwitch(l)
        }
        return lang;
    }
    const [menu, toggleMenu] = useState(false)
    
    return (
        <div className={`p-1 ${absolute ? "md:hidden z-50 block absolute top-0 right-0": ""}`}>
            <div className="relative inline-block">
                <button onClick={() => toggleMenu(!menu)} className={`text-white text-base font-semibold py-2 px-4 rounded inline-flex items-center`}>
                    <span className="mr-1">
                        <svg width="2rem" height="3rem" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"></path>
                        </svg>
                    </span>
                </button>
                <div className={`absolute right-0 ${absolute ? 'py-1' : ''} ${menu ? 'block' : 'hidden'} ${show ? 'backdrop-blur-sm bg-[rgba(53,206,4,0.25)] shadow-0_8px_32px_0_rgba(31,38,135,0.37)] text-white' : 'text-gray bg-white'}`} >
                    {langs.map(lan => (
                        <button key={lan.code} onClick={() => changeLang(lan.code)} className="py-[.54rem] px-4 block nowrap pointer hover:text-green-400" >{lan.native_name || lan.name}</button>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default LanguageSwitcher