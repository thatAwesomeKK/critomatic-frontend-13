import ContentCard from '@/components/Browse/ContentCard'
import Link from 'next/link'
import React from 'react'
const hostname = process.env.NEXT_PUBLIC_API_IP_ADDRESS

type PageProps = {
    params: {
        contentType: string
    }
}

async function Content({ params: { contentType } }: PageProps) {
    const contents = await fetch(`${hostname}/api/getcontent/get-${contentType}`).then(res => res.json())

    return (
        <section className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {contents.map((content: any) => (
                <Link key={content._id} passHref href={`/browse/${contentType}/${contentType}@${content.slug}`}>
                    <ContentCard content={content} />
                </Link>
            ))}
        </section >
    )
}

export default Content