'use client'
import { storeToken } from '@/utils/redux/slice/TokenSlice';
import { store } from '@/utils/redux/store';
import React, { useRef } from 'react'

function PreLoader({ token }: { token: string }) {
    const loaded = useRef(false);
    if (!loaded.current) {
        store.dispatch(storeToken(token))
        loaded.current = true
    }
    return null
}

export default PreLoader