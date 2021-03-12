import React from 'react'
import './Menu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export default function Menu(props) {
    return (
        <div className="menu-dash d-flex flex-column justify-content-between align-items-center">
            <ul>
                <li>
                    <Link to="/dashboard" className="icon">
                        <FontAwesomeIcon icon={ props.icons.home } ></FontAwesomeIcon>
                    </Link>
                </li>
                <li>
                    <Link className="icon">
                        <FontAwesomeIcon icon={ props.icons.shoppingBag } ></FontAwesomeIcon>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link className="icon">
                        <FontAwesomeIcon icon={ props.icons.door } ></FontAwesomeIcon>
                    </Link>
                </li>
                <li>
                    <Link>
                        <FontAwesomeIcon icon={ props.icons.paw } className="icon"></FontAwesomeIcon>
                    </Link>
                </li>
                <li>
                    <Link>
                        <FontAwesomeIcon icon={ props.icons.clock } className="icon"></FontAwesomeIcon>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
