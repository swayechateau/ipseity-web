import { useEffect, useState } from 'react';
import { langs } from '../../state';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
export interface INav {
  yAxis: number,
  language: string,
  onSwitch(language: string): void
}
function DesktopNav({ yAxis = 40, language, onSwitch }: INav) {
  const [show, setShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY >= yAxis) {
      setShow(true);
    } else setShow(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => window.removeEventListener('scroll', transitionNavbar);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 min-h-max h-16 z-50 transition-all ease-in hidden md:flex print:none ${show
        ? 'backdrop-blur-sm bg-[rgba(53,206,4,0.25)] shadow-0_8px_32px_0_rgba(31,38,135,0.37)]'
        : 'bg-transparent'
        }`}
    >
      <div className="flex items-center justify-center">
        <h1 className="my-2 mx-3">
          <span className="text-3xl font-bold text-green-500">S</span>
          <span className="text-3xl font-bold text-yellow-500">C</span>
        </h1>
      </div>
      <div className="grow items-center justify-center flex space-x-3">
        <a href="/">
          <div className="capitalize text-white text-2xl p-1 transition-all ease-in hover:text-green-400">
            Home
          </div>
        </a>
        <a href="/projects">
          <div className="capitalize text-white text-2xl p-1 transition-all ease-in hover:text-green-400">
            Projects
          </div>
        </a>
        <a href="/about">
          <div className="capitalize text-white text-2xl p-1 transition-all ease-in hover:text-green-400">
            About
          </div>
        </a>
        <a href="/blog">
          <div className="capitalize text-white text-2xl p-1 transition-all ease-in hover:text-green-400">
            Blog
          </div>
        </a>
      </div>
      <div className="flex items-center justify-center space-x-3 p-1">
        <LanguageSwitcher absolute={false} show={show} current={language} langs={langs} onSwitch={onSwitch} />
      </div>
    </nav>
  );
}

export default DesktopNav;
