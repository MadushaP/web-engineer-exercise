import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './styles/apps.css';

export default function Apps({
    error,
    items,
    fetchApps
}) {
    if (!items || !items.length) {
        fetchApps();
        return (<div>LOADING APPS...</div>);
    }

    return (
        <ul id="apps">
            {items.map(({ id, name, logo }) => {
                return (
                    <div>
                    <li class="app">
                        <Link to={`/apps/${id}`}>
                            <p>{name}</p>
                            <img src={logo} alt={name} width="100" height="100"/>
                        </Link>
                    </li>
                        <Button id="button" variant="primary">Edit</Button>
                    </div>
                );
            })}
        </ul>
    );
}
