import React from 'react'

const Lpage = () => {
    return (
        <div className='relative'>
            <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52  opacity-60 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"> </div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            <div>   
                <div className="relative pt-36 ml-auto ">
                    <div className="lg:w-2/3 text-center mx-auto">
                        <h1 className="text-gray-900  font-bold text-5xl md:text-6xl xl:text-7xl">AICraft: Where <span className="text-cyan-700">AI Meets Creative Brilliance</span> for Perfect Content</h1>
                        <p className="mt-8 text-gray-700">AICraft leverages advanced AI to revolutionize content creation. Whether it's engaging blog posts, compelling marketing copy, or dynamic social media content, our technology delivers creativity and precision in every piece.</p>
                        <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                            <a
                                href="/dashboard"
                                className="relative flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-cyan-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                            >
                                <span className="relative text-base font-semibold text-white"
                                >Get started</span>
                            </a>
                            <a
                                href="#"
                                className="relative flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                            >
                                <span
                                    className="relative text-base font-semibold text-primary dark:text-white"
                                >Learn more</span>

                            </a>
                        </div>
                        <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">AI-Driven Excellence:</h6>
                                <p className="mt-2 text-gray-500">Some text here</p>
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Creative Brilliance:</h6>
                                <p className="mt-2 text-gray-500">Some text here</p>
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Seamless Experience:</h6>
                                <p className="mt-2 text-gray-500">Some text here</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Lpage