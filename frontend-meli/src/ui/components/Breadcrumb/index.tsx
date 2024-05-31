import React from 'react';

import "./style.scss";

export const Breadcrumb = ({ items = [] }) => {

    const list = items.map( (item, i, a) => {
        const active = i === a.length - 1;
        const classes = active ? 'meli-active' : '';

        return (
            <li className={classes}>
                 <a href="/" onClick={e => e.preventDefault()}>
                    {item}
                </a>
            </li>
        );
    });

    return (
        <section className="meli-breadcrumbs">
            <ol className="meli-breadcrumbs-nav">
                {list}
            </ol>
        </section>
    );
}

export default Breadcrumb;