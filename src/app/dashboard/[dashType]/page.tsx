import Providers from '@/app/(Providers)/Providers';
import React from 'react'
import Profile from '../../../components/Dasboard/Profile';
import Reviews from '../../../components/Dasboard/Reviews';

interface PageProps {
    params: {
        dashType: string;
    }
}

function Dashboard({ params: { dashType } }: PageProps) {
    return (
        <Providers>
            {dashType === "profile" && <Profile />}
            {dashType === "reviews" && <Reviews />}
        </Providers>
    );
}

export default Dashboard