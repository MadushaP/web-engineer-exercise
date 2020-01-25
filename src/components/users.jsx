import React, {useState} from 'react';
import { Link } from 'react-router-dom';


export default function Users({
    error,
    items,
    fetchUsers,
    appId,
    history
}) {
    if (!items || !items.length) {
        fetchUsers();
        return (<div>LOADING USERS...</div>);
    }

    function buildPagination(id) {
        return (
            <ul className="nav">
                <li><Link  onClick={back} to={`/apps/${id}/${currentPage }`}>Previous</Link></li>
                <li><Link  onClick={next} to={`/apps/${id}/${currentPage }`}>Next</Link></li>
            </ul>
        );
    }

    function next() {
        if (currentPage > (items.length / pageSize) - 1)
         return;
        else {
            let nextPage =  (currentPage + 1)
            let lastIndex = pageSize * nextPage;
            let firstIndex = lastIndex - pageSize;

            setCurrentPage(nextPage);

            setPageItems(items.slice(firstIndex,lastIndex));

        }
    }

    function back() {
        if(currentPage <= 1)
            return;
        else {

            let nextPage =  (currentPage - 1);
            let lastIndex = pageSize * nextPage;
            let firstIndex = lastIndex - pageSize;

            setCurrentPage(nextPage);

            setPageItems(items.slice(firstIndex,lastIndex));
        }
    }


    const [pageSize,setPageSize] = useState(5);
    const [currentPage,setCurrentPage] = useState(1);

    const [pageItems,setPageItems] = useState(items.slice(0,5));

    return (
        <div id="users">
            {buildPagination(appId)}
            <ul>
                {pageItems.map(({ id, name, email, avatar }) => {
                    return (
                        <li  key={id}>
                            <p>Name: {name}</p>
                            <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
                            <img src={avatar} alt={name} width="50" height="50"/>
                        </li>
                    );
                })}
            </ul>
            {buildPagination(appId, currentPage)}
        </div>
    );
}
