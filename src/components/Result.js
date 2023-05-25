import React from 'react'
import './Result.css'

const Result = (props) => {
    return (
        <div className='result'>
            <div className='dis'>
                {props.result}
            </div>
        </div>
    )
}

export default Result
