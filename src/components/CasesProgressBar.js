import React from 'react'
import {CircularProgressbarWithChildren } from 'react-circular-progressbar'

export const CasesProgressBar = (props) => {
    const color = props.color
    return (
        <div className='mt-5'>
            <CircularProgressbarWithChildren value={props.rate} text={`${props.rate}%`}
            strokeWidth={3}
               styles={{
                path: {
                  stroke: color,
                  strokeLinecap: 'butt',
                },
                text: {
                  color:'#fff',
                  fontSize: '12px',
                },
                
              }}
            >
                <div className='mt-5 text-white'>
                    <strong>{props.text}</strong>
                </div>
            </CircularProgressbarWithChildren>
        </div>
    )
}
