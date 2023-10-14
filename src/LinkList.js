import React from "react";

import "./LinkList.css";

const LinkList = (link) => {
    const linkMarkup = () => {
        <li key={1} className="link-list-item">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-list-item-url"
            > {"Link"}
            </a>
        </li>
    };

    console.log("Made link element; link is " + link.toString());

    return <ul className="link-list"> {linkMarkup} </ul>;
};

export default LinkList;