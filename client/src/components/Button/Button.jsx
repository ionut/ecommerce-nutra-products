import React from 'react'

export const Button = ({ type, children, backgroundColor, hoverColor, boxShadow, extraStyle, width, addToCart }) => {
    return (
        <button type={type} className={`text-white font-extrabold text-xl py-[10px] px-[30px] ${extraStyle}`} onClick={addToCart}>{children}</button>
    )
}
