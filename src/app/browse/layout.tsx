import React from 'react'
import ContentNav from '../../components/Browse/ContentNav'

function layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <ContentNav />
            {children}
        </main>
    )
}

export default layout