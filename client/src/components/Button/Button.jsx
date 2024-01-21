import React from 'react'

export const Button = ({ type, text, backgroundColor, hoverColor, boxShadow, extraStyle, width }) => {
    return (
        <button type={type} className={`text-white font-extrabold text-xl py-[10px] px-[30px] ${width} ${hoverColor} ${backgroundColor} ${boxShadow} ${extraStyle}`}>{text}</button>
    )
}
