import Image from 'next/image'

const Crew = ({ crew }: any) => {
    return (
        <div className='flex justify-center items-center flex-col group w-28'>
            <div className='w-24 h-36 transition-transform duration-100 ease-in-out group-hover:scale-110'>
                <Image className='rounded-full object-cover border-gray-500 border-[2px]' src={crew.crewID.img ? `https://image.tmdb.org/t/p/w500${crew.crewID.img}` : '/img/no_profile.png'} alt='' height={730} width={480} />
            </div>
            <div className='group-hover:opacity-100 opacity-0 text-center'>
                <h3 className='whitespace-nowrap font-semibold pt-2'>{crew.crewID.name}</h3>
                <p className='text-gray-400 whitespace-nowrap'>as {crew.job}</p>
            </div>
        </div>
    )
}

export default Crew