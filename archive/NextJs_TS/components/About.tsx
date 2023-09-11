import Link from 'next/link';
import React from 'react';
import Canvas from './Canvas';
const About = () => {
  return (
    <section id="about" className="relative bg-cover ">
      <Canvas
        id="about-matrix"
        className="absolute w-full h-full bg-cover -z-10"
      />
      <div className="bg-fade-top h-32"></div>
      <div className="flex flex-wrap items-center h-auto py-32 md:mx-20 xl:justify-center ">
        <div className="flex w-full p-10 rounded-lg xl:w-4/5">
          {/* About Me Summary */}
          <div className="flex flex-col xl:rounded-l p-4 shadow-2xl backdrop-blur-sm bg-[rgba(0,0,0,0.15)] text-center xl:w-4/5 xl:p-12 xl:text-left">
            <div className="grow">
              <div
                className="block w-48 h-48 mx-auto -mt-16 bg-center bg-cover rounded-full shadow-xl xl:hidden"
                style={{
                  backgroundImage:
                    "url('https://yt3.ggpht.com/GojMrcrTTQDEx221wqyX_iIlLdmamrD6LQDwOY9Anv25sh2BgUiZ-LCVAQ4SPohIInh_O_i3zkY=s900-c-k-c0x00ffffff-no-rj')",
                }}
              ></div>
              <h1 className="pt-8 text-3xl font-bold text-white xl:pt-0">
                Swaye Chateau
              </h1>
              <div className="pt-3 mx-auto border-b-2 border-green-500 xl:mx-0"></div>
              <p className="pt-4 text-xl font-bold text-white">
                Software Developer, Photographer and Vlogger
              </p>
              <p className="pt-2 text-base text-gray-400">
                Based in the United Kingdom
              </p>
              <div>
                <p className="pt-4 text-white text-md">
                  Currently working with blochchains in the digital identity
                  space using Verifiable Credentials and Self-Soverign Identity
                  in a decentralised enviroment.
                </p>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="py-8 text-lg">
              <Link href="https://cv.swayechateau.com" passHref target="_blank">
                <div className="inline-block px-4 py-2 m-1 text-white uppercase bg-green-700 rounded-lg cursor-pointer hover:bg-green-900 ">
                  View CV
                </div>
              </Link>
              <Link
                href="https://blog.swayechateau.com/about"
                passHref
                target="_blank"
              >
                <div className="inline-block px-4 py-2 m-1 text-white uppercase bg-green-700 rounded-lg cursor-pointer hover:bg-green-900 ">
                  More About Me
                </div>
              </Link>
            </div>
          </div>
          {/* About Me Full Profile Picture */}
          <div
            className="xl:w-2/6 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://file.swayechateau.com/view/swayechateaudZ9YM8r3Rx8ubLAN8nzn29')",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;
