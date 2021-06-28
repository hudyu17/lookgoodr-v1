import React, { useState } from 'react';
import "./Collapsible.css";

const Collapsible = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="collapsible">
            <button className={isOpen ? "toggle-open" : "toggle"} onClick={() => setIsOpen(!isOpen)}>
                {props.label}
                {isOpen ? <i class="fa fa-caret-up"/> : <i class="fa fa-caret-down"/>}
            </button>
            {isOpen && <div className="content">{props.children}</div>}
        </div>
    )
}

export default Collapsible
