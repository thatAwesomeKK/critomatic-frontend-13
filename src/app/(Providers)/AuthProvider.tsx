import { storeToken } from '@/utils/redux/slice/TokenSlice';
import { store } from '@/utils/redux/store';
import { cookies } from 'next/headers'
import PreLoader from '../PreLoader';
const hostname = process.env.NEXT_PUBLIC_API_IP_ADDRESS

const refresh = async () => {
    const cookieStore = cookies()
    const refreshToken = cookieStore.get('refreshToken')?.value

    const res = await fetch(`${hostname}/api/auth/refresh-token`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "x-refresh-token": refreshToken!,
        },
    });
    const token = await res.json();
    // console.log(token);
    
    return token
}

async function AuthProvider({ children }: { children: React.ReactNode }) {
    const token = await refresh()
    store.dispatch(storeToken(token.accessToken))

    return (
        <>
            <PreLoader token={token.accessToken}/>
            {children}
        </>
    )
}

export default AuthProvider