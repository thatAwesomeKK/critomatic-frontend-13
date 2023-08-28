import React from 'react'
import ContentNav from '../../components/Browse/ContentNav'

function layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <ContentNav />
            {children}
        </section>
    )
}

export default layout