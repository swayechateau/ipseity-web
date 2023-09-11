<template>
    <div className={`w-full min-h-max h-[50vh] bg-cover bg-no-repeat bg-center flex flex-col  ${isLarge && "h-screen"}`} style={{
            backgroundImage: `url(${hero})`
          }}>
            <div className="flex items-center justify-center grow">
                <div className="rounded-xl text-white transition-all ease-in m-4 p-7 backdrop-blur-sm shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] bg-[rgba(99,108,98,0.15)] hover:scale-105" >
                    <h1 className='mb-1 text-4xl font-extrabold animate-glow'>
                        {title}
                    </h1>
                    <h2 className='text-center text-base p-4'>
                        {subtitle && <Typewriter string={subtitle} delay={200} cursor='_'/> }
                    </h2>
                </div>
            </div>
            { isLarge && <div className="h-32 w-full bg-fade-bottom"> </div> }
        </div>
</template>