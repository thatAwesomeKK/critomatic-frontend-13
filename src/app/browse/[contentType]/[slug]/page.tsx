import Cast from '@/components/Content/Cast'
import Crew from '@/components/Content/Crew'
import PlatformFetch from '@/components/Content/PlatformFetch'
import ReviewModal from '@/components/Content/ReviewModal'
import Reviews from '@/components/Content/Reviews'
import TrailerPlayer from '@/components/ui/TrailerPlayer'
import Image from 'next/image'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
const hostname = process.env.NEXT_PUBLIC_API_IP_ADDRESS

type PageProps = {
    params: {
        slug: string
        contentType: string
    }
}

async function ContentPage({ params: { slug, contentType } }: PageProps) {
    const content: any = await fetch(`${hostname}/api/getcontent/get-single-content?slug=${slug}&contentType=${contentType}`).then(res => res.json())
    const ratings: any = await fetch(`${hostname}/api/addrating/get?contentid=${content._id}&slug=${slug}&contentType=${contentType}`).then(res => res.json())

    return (
        <main>
            <div
                className="w-full h-[60vh] bg-center bg-no-repeat bg-cover bg-fixed"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${content.bgimg})`,
                }}
            ></div>
            <div className="max-w-7xl lg:mx-4 md:mx-4 sm:mx-4 mx-4 xl:mx-auto my-5">
                {/* <Head>
                    <title>{content.title}</title>
                </Head> */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="font-extrabold text-2xl md:text-4xl">
                            {content.title}
                        </h1>
                        <h3>
                            {content.releaseDate || content.AirDate} • {content.duration} • {content.platform ? content.platform : "In Theatres"}
                        </h3>
                    </div>
                    <div className="flex justify-center space-x-5 items-center">
                        <div className="text-center">
                            <h2 className="text-sm font-semibold text-gray-400">
                                CritoMatic RATING
                            </h2>
                            <div className="flex justify-center items-center">
                                <AiFillStar className="h-8 w-8" />
                                <h3 className="font-normal text-lg">
                                    <span className="font-bold text-xl">
                                        {content.adminRating.rating}
                                    </span>
                                    /10
                                </h3>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold text-gray-400">
                                Users RATING
                            </h2>
                            <div className="flex justify-center items-center">
                                <AiFillStar className="h-8 w-8" />
                                <h3 className="font-normal text-lg">
                                    <span className="font-bold text-xl">
                                        {content.userRating ? content.userRating : 0}
                                    </span>
                                    /10
                                </h3>
                            </div>
                        </div>
                        <ReviewModal contentID={content._id} contentType={contentType} />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="hidden xl:block relative">
                        <PlatformFetch platform={content.platform} />
                        <div className="flex">
                            <Image
                                className="rounded-lg"
                                src={`https://image.tmdb.org/t/p/w500${content.titleposter}`}
                                alt=""
                                height={360}
                                width={240}
                            />
                        </div>
                    </div>
                    <div className="h-auto xl:w-1/2 w-full">
                        <TrailerPlayer url={content.video} />
                    </div>
                </div>
                <div className="my-6 flex flex-row flex-wrap">
                    {content.genre.map((genre: any) => (
                        <span
                            className="border-2 px-3 py-1 my-2 mx-2 rounded-2xl"
                            key={genre}
                        >
                            {genre}{" "}
                        </span>
                    ))}
                </div>
                <hr />
                <div className="flex flex-row sm:my-5 w-full my-5">
                    <div className="px-6 w-full">
                        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
                        <div className="flex justify-center items-center space-x-2">
                            <div className="xl:hidden block relative">
                                <PlatformFetch platform={content.platform} />
                                <Image
                                    className="rounded-lg"
                                    src={`https://image.tmdb.org/t/p/w500${content.titleposter}`}
                                    alt=""
                                    height={360}
                                    width={240}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start h-full">
                                <p className="text-sm font-semibold md:text-xl sm:text-base">
                                    {content.summary}
                                </p>
                                <p className="font-semibold">
                                    <span className="text-lg font-bold">Box Office: </span>
                                    {content.boxoffice && content.boxoffice}
                                    {!content.boxoffice && "N.A"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="my-4">
                    <div className="flex justify-center items-start flex-col my-4">
                        <h2 className="font-bold text-lg mb-2 text-white">Crew</h2>
                        <div className="flex justify-start items-center mx-8 flex-wrap">
                            {content.crew.map((crew: any, index: any) => (
                                <Crew key={index} crew={crew} />
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-center items-start flex-col my-4">
                        <h2 className="font-bold text-lg mb-2 text-white">Cast</h2>
                        <div className="flex justify-start items-center mx-8 flex-wrap">
                            {content.cast.map((actor: any, index: any) => (
                                <Cast key={index} cast={actor} />
                            ))}
                        </div>
                    </div>
                    <hr />
                </div>
                <Reviews ratings={ratings.ratings} />
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    const contents = await fetch(`${hostname}/api/getcontent/get-slugs`, { next: { revalidate: 60 } }).then(res => res.json())
    return contents.content.map((content: any) => ({
        contentType: content.contentType.toString(),
        slug: content.slug.toString()
    }))
}

export default ContentPage