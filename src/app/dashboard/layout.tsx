import React from 'react'
import DashNav from '../../components/Dasboard/DashNav'

function layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className='max-w-7xl mx-auto overflow-hidden'>
            <DashNav />
            {children}
        </main>
    )
}

export default layout