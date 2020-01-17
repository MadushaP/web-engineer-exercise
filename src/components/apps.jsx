import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-modal';

import './styles/apps.css';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 :'30%'
    }
};

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
    console.log(items)

    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [appIndex,setAppIndex] = React.useState(0);


    function openModal(index) {
        setAppIndex(index)
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal(){
        setIsOpen(false);
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
                        <Button id="button" variant="primary" onClick={() => openModal(index)}>Edit</Button>
                    </div>
                );
            })}
            <Modal ariaHideApp={false}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <h2>Edit Page</h2>
                <form>
                    <label>
                       App Name:
                        <input style={{'width': '100%'}}type="text" name="name" value={items[appIndex].name} />
                    </label>
                    <label>
                        Logo:
                        <input style={{'width': '150%'}}type="text" name="name" value={items[appIndex].logo} />
                    </label>
                </form>
                <button onClick={closeModal}>Close</button>
                <button onClick={closeModal}>Submit</button>
            </Modal>
        </ul>
    );
}
