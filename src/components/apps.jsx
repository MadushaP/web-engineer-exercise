import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './styles/apps.css';

export default function Apps({
    error,
    items,
    fetchApps,
    updateApp
}) {
    if (!items || !items.length) {
        fetchApps();
        return (<div>LOADING APPS...</div>);
    }

    return (
        <ul id="apps">
            {items.map(({ id, name, logo }, index) => {
                return (
                    <div key={index}>
                    <li className="app">
                        <Link to={`/apps/${id}`}>
                            <p>{name}</p>
                            <img src={logo} alt={name} width="100" height="100"/>
                        </Link>
                    </li>
                        <Button id="button" variant="primary" onClick={() => updateApp(index, "MADUSHA")}>Edit</Button>
                    </div>
                );
            })}
        </ul>
    );
}
