import React from 'react'

export const Footer= () => {
    return (
        <div className='text-center bg-white text-dark p-3'>
            <h5 className='mt-4 font-weight-bolder'>© Bimms {(new Date).getFullYear()}</h5>
        </div>
    )
}
