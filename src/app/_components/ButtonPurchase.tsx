'use client'
import React from 'react'
import * as pixel from '@/lib/fbpixel'

const ButtonPurchase = () => {
    const handleClick = () => {
        console.log('click')
        pixel.event('Purchase', {
            value: 100,
            currency: 'USD'
        })
    }
    return <div className='bg-red-500 text-white p-3 rounded-md cursor-pointer' onClick={handleClick}>ButtonPurchase</div>
}

export default ButtonPurchase
