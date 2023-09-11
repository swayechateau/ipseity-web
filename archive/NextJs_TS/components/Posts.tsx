import React from 'react'
import Image from 'next/image'
// investigate why i did not use Image

const Posts = () => {
  return (
    <section className="flex items-center justify-center text-gray-300 ">
        <div className="container px-5 py-24 ">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-semibold text-gray-100 md:text-6xl">Recent Posts</h1>
            <a href="http://blog.swayechateau.com/posts" target="_blank" rel="noopener noreferrer">
              <div className="my-2 text-base text-green-300 hover:text-green-400 md:text-lg">See More Posts</div>
            </a>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="px-4 pt-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full overflow-hidden rounded-lg">
                <Image 
                  className="object-cover object-center w-full lg:h-72 md:h-48"
                  src="https://picsum.photos/id/188/720/400" 
                  alt="blog"
                  width={720}
                  height={400}
                  sizes='100vw'
                />
                <div className="p-6 transition duration-300 ease-in rounded-b-lg hover:bg-green-700 hover:text-white">
                  <h2 className="mb-1 text-base font-medium text-green-300">
                    October 29, 2021
                  </h2>
                  <h1 className="mb-3 text-2xl font-semibold">Cities are crowded</h1>
                  <p className="mb-3 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                    fuga! Dolores quisquam eius cum accusamus?</p>
                  <div className="flex flex-wrap items-center ">
                    <a className="inline-flex items-center text-green-300 md:mb-2 lg:mb-0">Read More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span
                      className="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-400 lg:ml-auto md:ml-0">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none"
                        strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>4 min read
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full overflow-hidden rounded-lg ">
                <Image 
                  className="object-cover object-center w-full lg:h-72 md:h-48"
                  src="https://picsum.photos/id/1016/720/400"
                  alt="blog"
                  width={720}
                  height={400}
                  sizes='100vw'
                />
                <div className="p-6 transition duration-300 ease-in rounded-b-lg hover:bg-green-700 hover:text-white">
                  <h2 className="mb-1 text-base font-medium text-green-300">October 29,
                    2021</h2>
                  <h1 className="mb-3 text-2xl font-semibold">Mountains are alone</h1>
                  <p className="mb-3 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                    fuga! Dolores quisquam eius cum accusamus?</p>
                  <div className="flex flex-wrap items-center ">
                    <a className="inline-flex items-center text-green-300 md:mb-2 lg:mb-0">Read More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span
                      className="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-400 lg:ml-auto md:ml-0">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none"
                        strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>5 min read
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/3">
              <div className="h-full overflow-hidden rounded-lg">
                <Image 
                  className="object-cover object-center w-full lg:h-72 md:h-48"
                  src="https://picsum.photos/id/1011/720/400"
                  alt="blog"
                  width={720}
                  height={400}
                  sizes='100vw'
                />
                <div className="p-6 transition duration-300 ease-in hover:bg-green-700 hover:text-white">
                  <h2 className="mb-1 text-base font-medium text-green-300">October 29,
                    2021</h2>
                  <h1 className="mb-3 text-2xl font-semibold">Lakes are silent</h1>
                  <p className="mb-3 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque incidunt ipsam reprehenderit
                    fuga! Dolores quisquam eius cum accusamus?</p>
                  <div className="flex flex-wrap items-center ">
                    <a className="inline-flex items-center text-green-300 md:mb-2 lg:mb-0">Read More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span
                      className="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-400 lg:ml-auto md:ml-0">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none"
                        strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>2 min read
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Posts