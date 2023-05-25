import React from 'react'
import './KeyPad.css'

const KeyPad = (props) => {

    return (
        <div className='keypad'>
            <div className='pad__container'>
                <div className="row">
                    <button onClick={() => {props.input('1')}}>1</button>
                    <button onClick={() => {props.input('2')}}>2</button>
                    <button onClick={() => {props.input('3')}}>3</button>
                    <button className='operator' onClick={() => {props.input('+')}}>+</button>
                </div>
                <div className="row">
                    <button onClick={() => {props.input('4')}}>4</button>
                    <button onClick={() => {props.input('5')}}>5</button>
                    <button onClick={() => {props.input('6')}}>6</button>
                    <button className='operator' onClick={() => {props.input('-')}}>-</button>
                </div>
                <div className="row">
                    <button onClick={() => {props.input('7')}}>7</button>
                    <button onClick={() => {props.input('8')}}>8</button>
                    <button onClick={() => {props.input('9')}}>9</button>
                    <button className='operator' onClick={() => {props.input('*')}}>*</button>
                </div>
                <div className="row">
                    <button onClick={() => {props.input('.')}}>.</button>
                    <button onClick={() => {props.input('0')}}>0</button>
                    <button className='operator' onClick={() => {props.input('C')}}>C</button>
                    <button className='operator' onClick={() => {props.input('CE')}}>CE</button>
                    
                </div>
                <div className='row equal'>
                   <button  className='operator' onClick={() => {props.input('=')}}>=</button>
                </div>
            </div>
        </div>
    )
}

export default KeyPad
