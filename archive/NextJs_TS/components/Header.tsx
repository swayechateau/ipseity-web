import React from 'react';

const Header = () => {
  return (
    <header
      className="flex flex-col w-full bg-blue-400 bg-center bg-no-repeat bg-cover h-[80vh] min-h-max backdrop-blur-sm header-image"
    >
      <div className="flex items-center justify-center mt-20 grow">
        <div className="rounded-xl text-white text-center transition-all ease-in m-4 p-5 sm:p-10 backdrop-blur-sm shadow-[0_8px_32px_0_rgba(111,111,111,0.37)] bg-[rgba(0,0,0,0.25)] hover:scale-105">
          <h1 className="mb-1 text-4xl font-extrabold animate-glow">
            Swaye Chateau
          </h1>
          <h2 className="py-2 text-2xl">
            I am{' '}
            <span id="who" className="animate-glow">
              Under Development!
            </span>
          </h2>
        </div>
      </div>
      <div className="w-full h-32 bg-fade-bottom"> </div>
    </header>
  );
};

export default Header;
