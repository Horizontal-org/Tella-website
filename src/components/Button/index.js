import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

const Button = ({
    outline = false,
    className,
    style,
    link,
    label
}) => {
     return (
        <div className="button-center">
            <Link to={link}>
                <button
                    className={clsx('button', 'clean-btn', 'button--primary')}
                    style={style}
                    role="button"
                >
                    {label}
                </button>
            </Link>
        </div>
    );
};

export default Button;
