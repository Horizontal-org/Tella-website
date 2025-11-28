import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

// Build the Button component with the specified props
const Button = ({
    outline = false, // Whether the button should be an outline button
    className, // Custom classes for the button
    style, // Custom styles for the button
    link, // The URL the button should link to
    label // The text of the button
}) => {

    const centerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: "20px",
    };


     return (
        <Link to={link} style= {centerStyle}>
            <button
                className={clsx('button', 'clean-btn', 'button--primary')}
                style={style}
                role="button"
            >
                {label}
            </button>
        </Link>
    );
};

export default Button;
