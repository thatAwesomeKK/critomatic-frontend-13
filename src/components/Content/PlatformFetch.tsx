import Image from 'next/image'
import React from 'react'
import { SiNetflix } from 'react-icons/si'
import { MdTheaters } from 'react-icons/md'

function PlatformFetch({ platform }: any) {
    return (
        <div className='absolute top-2 left-2 z-10'>
            {platform === 'NETFLIX' ? <SiNetflix size={32} style={{ color: 'red' }} /> : ''}
            {platform === 'PRIME VIDEO' ? <Image layout='raw' alt='' src={'/img/prime-video.png'} width={70} height={25} /> : ''}
            {platform === 'HBO MAX' ? <Image layout='raw' alt='' src={'/img/HBO_Max.png'} width={70} height={15} /> : ''}
            {platform === 'DISNEY+' ? <Image layout='raw' alt='' src={'/img/disney+.png'} width={85} height={50} /> : ''}
            {platform === 'BOOK MY SHOW' ? <Image layout='raw' alt='' src={'/img/bms.png'} width={50} height={50} /> : ''}
            {!platform ? <MdTheaters size={32} /> : ''}
        </div>
    )
}

export default PlatformFetch