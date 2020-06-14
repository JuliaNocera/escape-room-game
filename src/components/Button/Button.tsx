import React, { PropsWithChildren } from 'react';

enum ButtonTypes {
    PRIMARY = 'primary',
    PLAIN = 'plain'
}

interface ButtonProps {
    type?: ButtonTypes
    onClick: () => void
    className?: string
}

type ButtonWithChildren = PropsWithChildren<ButtonProps>

const Button = ({
    type = ButtonTypes.PRIMARY, 
    onClick, 
    className = '',
    children,
}: ButtonWithChildren) => (
        <button 
            className={`Button Button-${type} ${className}`} 
            onClick={onClick}
        >
            {children}
        </button>
    )

Button.TYPE = ButtonTypes

export default Button