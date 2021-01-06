import React from 'react'
import  s from './Feedback.module.css'

const FeedbackOptions = (props) => {
    return (
        <>
            {props.options.map(option => (
                <button
                    key={option}
                    type='button'
                    className={s.button}
                    onClick={() => props.onLeaveFeedback(option)}
                >{option.charAt(0).toUpperCase() + option.substr(1)}</button>))}
        </>
    )
}

export default  FeedbackOptions