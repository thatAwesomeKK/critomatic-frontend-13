import React from 'react'

function About() {
    return (
        <main>
            <div>
                <div className="w-full h-[60vh] bg-no-repeat bg-cover bg-fixed"
                    style={
                        {
                            backgroundImage: `url(https://images7.alphacoders.com/671/thumb-1920-671281.jpg)`
                        }
                    }></div>
                <div className='mx-auto max-w-7xl'>
                    <h1 className='flex justify-center items-center mt-20 font-serif font-bold text-4xl text-white'>CritoMatic</h1>
                    <p className=' text-gray-500 mt-10 ml-5 mr-5'>This Project is a website Named CritoMatic This is a Rating website which provides information,
                        ratings and some more details about Movies, Games and Shows. In this website you can browse through various Movies,
                        Games and Shows and get the latest information about them. The Website runs on the latest technology making it much more
                        fast and increasing user experience. The Website focuses on being used by every user & it does not matter if a person has
                        slower internet or can only view the website on the phone.</p>
                    <p className='text-gray-500 mt-10 ml-5 mr-5'>
                        CritoMatic &apos;s mission is to help consumers make an informed decision about how to spend their time and money on entertainment.
                        We believe that multiple opinions are better than one, user voices can be as important as critics,
                        and opinions must be scored to be easy to use</p>
                    <ul>
                        <li className='mt-5 ml-5 font-bold'>
                            Founded:
                        </li>
                        <li className='text-gray-500 ml-5 text-sm'>
                            2022
                        </li>
                        <li className='mt-5 ml-5 font-bold'>
                            Category:
                        </li>
                        <li className='text-gray-500 ml-5 text-sm'>
                            Entertainment
                        </li>
                        <li className='mt-5 ml-5 font-bold'>
                            URL:
                        </li>
                        <li className='text-gray-500 ml-5 text-sm'>
                            http://www.critomatic.ml
                        </li>
                    </ul>

                    <h1 className='flex justify-center items-center mt-20 font-serif font-bold text-3xl text-white'>Services we Provide</h1>
                    <div className='flex justify-center items-center flex-wrap'>
                        <div className="inline-block bg-gray-300 max-w-sm rounded overflow-hidden shadow-lg mx-2 my-3">
                            <img className="w-full" src="https://images8.alphacoders.com/461/thumbbig-461502.webp" alt="Movies" />
                            <div className="px-6 py-4">
                                <div className="text-gray-700 font-bold text-xl mb-2">Movies</div>
                                <p className="text-gray-700 text-base">
                                    Know about latest movies, trends that are around going on around the world. Get to know about how much money your interested movie
                                    made, how much ratings it got by our reviewers and our team. Had a great time in the theatres?
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#movies</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#trends</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ratings</span>
                            </div>
                        </div>
                        <div className="inline-block bg-gray-300 max-w-sm rounded overflow-hidden shadow-lg mx-2 my-3">
                            <img className="w-full" src="https://images7.alphacoders.com/475/thumbbig-475264.webp" alt="Movies" />
                            <div className="px-6 py-4">
                                <div className="text-gray-700 font-bold text-xl mb-2">Shows</div>
                                <p className="text-gray-700 text-base">
                                    Know about latest shows, trends that are around going on around the OTT platforms. Get to know about how much success your interested
                                    show made, how much ratings it got by our reviewers and our team. That show is awesome!
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#shows</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#trends</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#got</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About