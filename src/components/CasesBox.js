import React from 'react'
import { numberFormatter } from './numberFormatter'

export const CasesBox = (props) => {
    return (
        <div className='covid-cases-box p-3 mt-3'>
            <h5 className='font-weight-bolder mb-4'>{props.title}</h5>
            <p className={props.style}>{numberFormatter(props.text)}</p>
        </div>
    )
}
