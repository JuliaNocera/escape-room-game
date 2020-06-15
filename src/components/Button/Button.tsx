import React, { PropsWithChildren } from 'react';

enum ButtonTypes {
    PRIMARY = 'primary',
    PLAIN = 'plain'
}

enum ButtonSizes {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

interface ButtonProps {
    type?: ButtonTypes
    size?: ButtonSizes
    onClick: () => void
    className?: string
}

type ButtonWithChildren = PropsWithChildren<ButtonProps>

const Button = ({
    type = ButtonTypes.PRIMARY, 
    size = ButtonSizes.LARGE,
    onClick, 
    className = '',
    children,
}: ButtonWithChildren) => (
        <button 
            className={`Button Button-${type} Button-${size} ${className}`} 
            onClick={onClick}
        >
            {children}
        </button>
    )

Button.TYPE = ButtonTypes
Button.SIZE = ButtonSizes

export default Button