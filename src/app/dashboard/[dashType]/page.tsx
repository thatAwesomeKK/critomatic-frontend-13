import Providers from '@/app/(Providers)/Providers';
import React from 'react'
import Profile from '../../../components/Dasboard/Profile';
import Reviews from '../../../components/Dasboard/Reviews';
import { store } from '@/utils/redux/store';

interface PageProps {
    params: {
        dashType: string;
    }
}

export const dynamic = 'force-dynamic'

function Dashboard({ params: { dashType } }: PageProps) {
    const accessToken = store.getState().accessToken.token
    return (
        <Providers>
            {dashType === "profile" && <Profile accessToken={accessToken!}/>}
            {dashType === "reviews" && <Reviews />}
        </Providers>
    );
}

export default Dashboard